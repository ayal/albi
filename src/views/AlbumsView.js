import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as albumActions } from '../redux/modules/albums'
import pitchfork_albums from '../../postpitch'


import styles from './AlbumsView.scss'

import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Search from 'material-ui/lib/svg-icons/action/search';




// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  albums: state.albums
})
export class AlbumView extends React.Component {
    constructor(props, context) {
	super(props, context)
	this.state = {
	    text: this.props.location.query.term || ''
	}
    }
    
    refetch(props) {
	return;
	
	var props = props || this.props;
	const {location: {query: {term}}} = props;
	this.props.fetchAsync(term);
    }

    
    componentDidMount(){
	this.refetch.bind(this)();
    }

    componentWillUpdate(nprops){
	console.log('Jaar component updated', nprops.location.query, this.props.location.query)
	if (nprops.location.query !== this.props.location.query) {
	    this.refetch.bind(this)(nprops);
	}
    }

    search(e) {
	if (e.key === 'Enter') {
	    this.setState({text:this.refs.input.value});
	    this.props.history.pushState(null, location.pathname, {term: this.refs.input.value});
	}
    }

    change(e) {
	this.setState({text:this.refs.input.value});
    }

    chooseAlbum(album){
	this.props.history.pushState(null, location.pathname, {album: album.collectionName, artist: album.artistName});
    }
    
    componentDidMount(){
	this.refetch.bind(this)();
    }

    render () {
	console.log('rendering album view', this.props, this.state, pitchfork_albums.length);
	var squares = pitchfork_albums.sort((a,b)=>(new Date(b.releaseDate) - new Date(a.releaseDate))).map((r) => {
	    var cyear = new Date(r.releaseDate).getFullYear();
	    return (
		    <GridTile onClick={this.chooseAlbum.bind(this, r)} title={r.collectionName} subtitle={r.artistName}><img src={r.artworkUrl100.replace('100x100','200x200')} />
		    <div className={styles['year']}>{cyear}</div>
		    </GridTile>
	    )
	});
	
	return (
		<div className="" style={{width:320,height:window.innerHeight - 320, overflow:'auto'}}>
		<AppBar
	    title="Albi"
	    iconClassNameRight="muidocs-icon-navigation-expand-more"
		/>
		<div>
		</div>
		<div className="albums">
		<GridList cellHeight={160}
	    style={{width: 320, height: 640, overflowY: 'auto'}}>
		
		{squares ? squares : 'loading..'}
	    </GridList>
		
	    </div>
		</div>
	);

	
	return (
		<div>Album View</div>
	)
  }
}

export default connect(mapStateToProps, albumActions)(AlbumView)

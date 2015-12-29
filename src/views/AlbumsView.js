import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as albumActions } from '../redux/modules/albums'
import styles from './AlbumsView.scss'

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
	this.props.history.pushState(null, location.pathname + 'tracks', {album: album.collectionName, artist: album.artistName});
    }
    
    componentDidMount(){
	this.refetch.bind(this)();
    }

    render () {
	console.log('rendering album view', this.props, this.state);
	if (!this.props.albums || !this.props.albums.payload) {
	    return (<div>loading...</div>);
	}

	var squares = this.props.albums.payload.results.map((r) => {
	    return (<div className="album" onClick={this.chooseAlbum.bind(this, r)} >
		    <img src={r.artworkUrl100} />
		    <div className="text">
		    {r.collectionName}
		    </div>
		    </div>)
	});
	
	return (
		<div className="container">
		<div>
		<input value={this.state ? this.state.text : ''} ref='input' onKeyPress={this.search.bind(this)} onChange={this.change.bind(this)} />
		</div>
		<div className="albums">
		<div className="all">
		
		<div className="album" onClick={this.chooseAlbum.bind(this, {})} >
		<div className="text">
		All tracks
	        </div>
		</div>
		
		</div>
		{squares ? squares : 'loading..'}
	    </div>
		</div>
	);

	
	return (
		<div>Album View</div>
	)
  }
}

export default connect(mapStateToProps, albumActions)(AlbumView)

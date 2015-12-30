import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as trackActions } from '../redux/modules/tracks'
import styles from './AlbumsView.scss'

import List from 'material-ui/lib/lists/list';
import Divider from 'material-ui/lib/divider';
import ListItem from 'material-ui/lib/lists/list-item';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  tracks: state.tracks
})


function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export class TracksView extends React.Component {
    constructor(props, context) {
	super(props, context)
	this.state = {

	}
    }


    refetch(props) {
	var props = props || this.props;
	const {location: {query: {album, artist}}} = props;
	this.props.fetchAsync(artist + ' ' + album);
    }

    
    componentDidMount(){
	this.refetch.bind(this)();
    }

    
    componentDidMount(){
	this.refetch.bind(this)();
    }
    
    render () {
	var that = this;
	console.log('rendering tracks view', this.props);
	if (!this.props.tracks || !this.props.tracks.payload) {
	    return (<div>loading...</div>);
	}

	var filterAlbum = this.props.location.query.album || '';
	var filterArtist = this.props.location.query.artist || '';

	var index = -1;
	var squares = this.props.tracks.payload.results.sort(function(a,b){return a.trackNumber - b.trackNumber}).map((r) => {

	    if (!r.artistName) {
		return null;
	    }
	    index++;
	    if (r.collectionName.toLowerCase().indexOf(filterAlbum.toLowerCase()) !== -1 &&
		r.artistName.toLowerCase().indexOf(filterArtist.toLowerCase()) !== -1) {
		var trackclass = (that.props.track && that.props.track.index === index) ? styles['track--selected'] : '';
		return (
		    	<div className={styles['track'] + ' ' + trackclass} onClick={this.props.chooseTrack.bind(this,{t: r, index})}>
		     <ListItem
		    primaryText={pad(r.trackNumber,2) + ' ' + r.trackName}>

			</ListItem>
			<Divider />
			</div>
		)
	    }

	});
	
	return (
		<div className="" style={{height:window.innerHeight - 320, overflow:'auto'}}>
		


		<div className="tracks">

		<List subheader={filterArtist + ' / ' + filterAlbum}>
		{squares ? squares : 'loading..'}
      	    </List>
		
	    </div>
		</div>
	);

	
	return (
		<div>Track View</div>
	)
  }
}

export default connect(mapStateToProps, trackActions)(TracksView)

import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as trackActions } from '../redux/modules/tracks'
import styles from './AlbumsView.scss'


// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  tracks: state.tracks
})

window.softclean = function(e, t) {
    return e.replace(/\./gim,'').replace(/"/gim, '').replace(/:/gim, '').split('ft')[0].split(' - ')[0];
}

window.clean = function(e, t) {
    return t ? e ? e.toLowerCase().replace(/"/gim, '').split(' - ')[0].split('ft')[0].replace(/^the\s|\sthe\s|\sand\s| ep$/gim, " ").replace(/part/gim, "pt").replace(RegExp("[^\\p{L}a-zA-Z0-9]", "gim"), "").replace("around", "round").trim(" ") : "" : e ? e.toLowerCase().replace(/^the\s|\sthe\s|\sand\s| ep$/gim, " ").replace(/\(.*?\)/gim, "").replace(/\[.*?\]/gim, "").replace(/part/gim, "pt").replace(RegExp("[^\\p{L}a-zA-Z0-9]", "gim"), "").replace("around", "round").trim(" ") : ""
}



var fetchFromPipe = function(tracks) {
    var hash = [];


    var vidreadiez = [];

    tracks.forEach(function(trk, trki) {
	if (!trk.name || !trk.artist) {
	    console.log('no track name or artists');
	    return;
	}
	var cleantrk = window.clean(trk.name);
	if (cleantrk === 'length') {
	    return;
	}
	var vidready =	null;
	var promise = new Promise(function(resolve){
	    vidready = resolve;
	});
	
	vidreadiez.push(promise);

	trk.artist = trk.artist.replace(' / ', ' & ').replace(/&/gim, 'and');

	var song = cleantrk.length > 30 ? trk.name : (trk.artist.toLowerCase() + ' ' + trk.name.toLowerCase());
	if (window.accurate) {
	    song += ' ' + trk.album;
	}
	
	//	    var req = $.getJSON('https://gdata.youtube.com/feeds/api/videos?q=' + encodeURIComponent(song) + '&safeSearch=none&orderby=relevance&max-results=15&v=2&alt=json&callback=?', function(e) {
	var req = fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&max-results=15&key=AIzaSyDmfdow0Soqa6o_Vg-JG2Hcg11Bzrm2Vgk&type=video&q=' + encodeURIComponent(song) ).then((x) => (x.json().then(
	    (e) => {




	    /*		if (!e.feed.entry || e.feed.entry.length === 0) {
	    //					   console.log('empty. resolving');
	    vidready.resolve();
	    return;
	    }*/

	    var lessgood = {};

		console.log(e)
		e.items.forEach(function(entry, i){

		    
		var cleanYTitle = window.clean(entry.snippet.title);
		var cleanartist = window.clean(trk.artist);

		var id = entry.id.videoId;
		var vidobj = {
		    order: trki,
		    id: id,
		    who_shared: 'takashirgb',
		    fromindie: true,
		    player: 'yt',
		    name: trk.name,
		    artist: trk.artist,
		    albums: trk.album,
		    viewCount: 0};

		function nogood(what, score, force) {
		    var rwhat = new RegExp(what);
		    if ((entry.snippet.title.toLowerCase().match(rwhat) ||
			 entry.snippet.description.toLowerCase().match(rwhat)) &&
			!trk.name.toLowerCase().match(rwhat)) {

			var already = lessgood[cleantrk];
			if (!already || score > already.s || force){
			    lessgood[cleantrk] = {s: score || 0, o: vidobj};   
			}

			console.log('its a ' + what, 'srch:',
				    song,
				    'you said: ',
				    cleanartist,
				    cleantrk,
				    'tube said',
				    cleanYTitle);
			return true;
		    }
		    return false;
		};
		

		var superclean = window.clean(entry.snippet.title, true).replace(cleantrk, '')
		    .replace(cleanartist, '')
		    .replace('new', '')
		    .replace('album', '')
		    .replace('lyrics','')
		    .replace('hd','')
		    .replace(/\d+p/gim,'')
		    .replace(window.clean(trk.album), '');

		


		/*    if (superclean.length > 20){
		      console.log('too many guys', 'srch:',
		      song,
		      'you said: ',
		      cleanartist,
		      cleantrk,
		      'tube said',
		      cleanYTitle);
		      return;

		      }*/

		if (cleanYTitle.indexOf(cleantrk.replace(/s$/gim, '')) === -1) {
		    console.log('no title.', 'srch:',
				song,
				'you said: ',
				cleantrk,
				'tube said',
				cleanYTitle);
		    return;
		}

		/*		    if (cleanYTitle.indexOf(cleanartist) === -1) {
				    var nothing = true;
				    $.each(entry.category,function(i, tag){
				    if (window.clean(tag.term).indexOf(cleanartist) !== -1){
				    nothing = false;
				    }
				    });
				    
				    if (nothing && cleantrk.length < 10) {
				    console.log('no artist.', 'srch:',
				    song,
				    'you said: ',
				    cleanartist,
				    cleantrk,
				    'tube said',
				    cleanYTitle);
				    return;
				    }
				    }*/

                //nogood('version')
		if (nogood('@ the', 2) || nogood('at the', 1) || nogood('from the basement', 1) ||
		    nogood('acoustic', 1) || nogood('thumbs') || nogood('concert') || nogood('explains') ||
		    nogood('teaser') || nogood('session', 1) || nogood('cover') || nogood('remix') ||
		    nogood('live', 1) || nogood('perform', 2) || nogood('version', 3) ||
		    nogood('philhar') || nogood('\\d{1,2}[\\.-/]\\d{1,2}', 0, true)) {
		    return;
		}

		/*		    if (entry.media$group.media$content[0].duration < 40) {
				    return;
				    }
		*/

		vidready(vidobj);
		return;

	    });

	    var lesskeys = Object.keys(lessgood);
	    vidready();   

	}
		
	    
	)));
	

	setTimeout(
	    function() {
		vidready();
	    }, 5000);
    });
    return vidreadiez;
};



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

    loadApi(id) {
	console.log('loading api with id', id)
	var that = this;
	if (this.player) {
	    this.player.loadVideoById({videoId: id});
	    return;
	}
	var x = document.getElementById('player');

// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
	document.getElementsByTagName("head")[0].appendChild(tag)

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
	window.onYouTubeIframeAPIReady = function() {
	    console.log('api ready');
            that.player = new YT.Player('player', {
		playerVars: { 'autoplay': 1},
		'videoId': id,
		events: {
		    'onReady': onPlayerReady,
		    'onStateChange': onPlayerStateChange
		}
            });
	}

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady (event) {
	  console.log('player ready');
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.ENDED) {
	      var next = that.props.tracks.payload.results.sort(function(a,b){return a.trackNumber - b.trackNumber})[that.state.track.index + 1];
	      that.chooseTrack({t: next, index: that.state.track.index + 1})

          }
      }
	
      function stopVideo() {
        player.stopVideo();
      }
	
    }

    chooseTrack(track) {
	var {t, index} = track;
	var that = this;
	this.setState({track: track})
	Promise.all(fetchFromPipe([{artist: t.artistName, name: t.trackName, album: t.collectionName}]))
	    .then(function(x){
		console.log('from pipe -> ', x[0].id);
		that.loadApi.bind(that, x[0].id)();
	    })
    }
    
    render () {
	var that = this;
	console.log('rendering tracks view', this.props);
	if (!this.props.tracks || !this.props.tracks.payload) {
	    return (<div>loading...</div>);
	}

	var filterAlbum = this.props.location.query.album || '';
	var filterArtist = this.props.location.query.artist || '';

	var index = 0;
	var squares = this.props.tracks.payload.results.sort(function(a,b){return a.trackNumber - b.trackNumber}).map((r) => {

	    if (!r.artistName) {
		return null;
	    }
	    index++;
	    if (r.collectionName.toLowerCase().indexOf(filterAlbum.toLowerCase()) !== -1 &&
		r.artistName.toLowerCase().indexOf(filterArtist.toLowerCase()) !== -1) {
		var trackclass = (that.state.track && that.state.track.index === index) ? styles['track--selected'] : '';
		return (<div className={styles['track'] + ' ' + trackclass} onClick={this.chooseTrack.bind(this,{t: r, index})}>
			<div className="text">
			<span>{pad(r.trackNumber,2)}. </span>
			<span>{r.trackName}</span>
			</div>
			</div>)
	    }
	});
	
	return (
		<div className="container">
		<div className="collection">{ filterArtist + ' / ' + filterAlbum}</div>
		<div>
		</div>
		<div className="tracks">
		{squares ? squares : 'loading..'}
	    </div>
		<div className="player">
		<div id="player" type="text/html" frameBorder="0" />
		</div>
		</div>
	);

	
	return (
		<div>Track View</div>
	)
  }
}

export default connect(mapStateToProps, trackActions)(TracksView)

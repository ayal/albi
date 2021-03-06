import { createAction, handleActions } from 'redux-actions'
import fetchp from 'fetch-jsonp'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_TRACKS = 'FETCH_TRACKS'

// ------------------------------------
// Actions
// ------------------------------------
export const fetch = createAction(FETCH_TRACKS, (x = []) =>
				  {
				      console.log('action function',x);
				      return x;
				  })

export const fetchAsync = (term) => {
    return (dispatch, getState) => {
	console.log('fetching tracks for', term);
	fetchp("//itunes.apple.com/search?term=" + encodeURIComponent(term || 'jaar') + "&limit=25&media=music&entity=musicTrack").then(
	    tracks => tracks.json().then((data) => dispatch(fetch(data))),
	    error => console.log('fetch error')
	);
  }
}

export const actions = {
    fetch,
    fetchAsync
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    [FETCH_TRACKS]: (state, { payload }) =>
	{
	    console.log('fetch track action');
	    return {...state,
		    payload
		   };
	}
}, [])

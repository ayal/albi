import { createAction, handleActions } from 'redux-actions'
import fetchp from 'fetch-jsonp'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_ALBUMS = 'FETCH_ALBUMS'

// ------------------------------------
// Actions
// ------------------------------------
export const fetch = createAction(FETCH_ALBUMS)

export const fetchAsync = (term) => {
    return (dispatch, getState) => {
	console.log('fetching', term);
	return fetchp("//itunes.apple.com/search?term=" + encodeURIComponent(term || 'jaar') + "&limit=25&media=music&entity=album").then(
	    albums => albums.json().then((data) => dispatch(fetch(data))),
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
    [FETCH_ALBUMS]: (state, { payload }) =>
	({...state,
	  payload
	 })
}, 1)

import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const MAIN = 'MAIN'

// ------------------------------------
// Actions
// ------------------------------------
export const main = createAction(MAIN, (x = []) =>
				  {
				      console.log('main action',x);
				      return x;
				  })


export const actions = {
    main
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    [MAIN]: (state, { payload }) =>
	{
	    return {...state,
		    payload
		   };
	}
}, [])

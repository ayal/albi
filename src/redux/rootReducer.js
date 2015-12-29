import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import tracks from './modules/tracks'
import albums from './modules/albums'

export default combineReducers({
    albums,
    tracks,
    counter,
    router
})

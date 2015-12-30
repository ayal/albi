import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import tracks from './modules/tracks'
import albums from './modules/albums'
import main from './modules/main'

export default combineReducers({
    main,
    albums,
    tracks,
    counter,
    router
})

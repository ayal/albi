import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import albums from './modules/albums'

export default combineReducers({
    albums,  
    counter,
    router
})

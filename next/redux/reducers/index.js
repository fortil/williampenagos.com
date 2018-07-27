import { combineReducers } from 'redux'
import profile from './profile'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  profile,
  routing: routerReducer
})

export default rootReducer

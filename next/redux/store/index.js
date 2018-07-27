import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers'
import initialState from '../reducers/initialState'

export function initializeStore(state = initialState()) {
  return createStore(reducer, state, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
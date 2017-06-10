/* eslint no-underscore-dangle: 0 */

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = function() {
  return createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunk)),
  )
}

export default configureStore

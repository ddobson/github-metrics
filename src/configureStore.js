import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const configureStore = function() {
  return createStore(
    rootReducer,
    {},
    applyMiddleware(thunk),
  )
}

export default configureStore

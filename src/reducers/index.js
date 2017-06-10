import { combineReducers } from 'redux'
import userHasAuthenticated from './reducer_user'

const rootReducer = combineReducers({
  user: userHasAuthenticated,
})

export default rootReducer

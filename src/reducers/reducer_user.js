import { AUTH_WITH_GITHUB_SUCCESS } from '../actions/user'

export default function userHasAuthenticated(state = {}, action) {
  switch (action.type) {
    case AUTH_WITH_GITHUB_SUCCESS:
      return action.payload
    default:
      return state
  }
}

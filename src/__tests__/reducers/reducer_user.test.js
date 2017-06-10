import userHasAuthenticated from '../../reducers/reducer_user'
import { AUTH_WITH_GITHUB_SUCCESS } from '../../actions/user'

describe('userHasAuthenticated reducer', () => {
  it('should return the default state when no action is defined', () => {
    expect(userHasAuthenticated(undefined, {})).toEqual({})
  })

  it('should handle AUTH_WITH_GITHUB_SUCCESS', () => {
    const action = {
      type: AUTH_WITH_GITHUB_SUCCESS,
      payload: {
        accessToken: 'test_token',
        displayName: 'Arya Stark',
        email: 'test@email.com',
        uid: '12345',
      },
    }

    expect(userHasAuthenticated(undefined, action)).toEqual(action.payload)
  })
})

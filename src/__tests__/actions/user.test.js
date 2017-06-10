import * as actions from '../../actions/user'

describe('authWithGithubSuccess', () => {
  it('should create an action with user information', () => {
    const exampleResponse = {
      credential: {
        accessToken: 'test_token',
      },
      user: {
        displayName: 'John Snow',
        email: 'test@email.com',
        uid: '12345',
      },
    }

    const payload = {
      accessToken: 'test_token',
      displayName: 'John Snow',
      email: 'test@email.com',
      uid: '12345',
    }

    const expectedAction = {
      type: 'AUTH_WITH_GITHUB_SUCCESS',
      payload,
    }

    expect(actions.authWithGithubSuccess(exampleResponse)).toEqual(expectedAction)
  })
})

import * as firebase from 'firebase'

export const AUTH_WITH_GITHUB_SUCCESS = 'AUTH_WITH_GITHUB_SUCCESS'

export function authWithGithubSuccess(result) {
  const { credential, user } = result

  return {
    type: AUTH_WITH_GITHUB_SUCCESS,
    payload: {
      accessToken: credential.accessToken,
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
    },
  }
}

export function authWithGithub() {
  const provider = new firebase.auth.GithubAuthProvider()

  return (dispatch) => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        dispatch(authWithGithubSuccess(result))
      })
      .catch(error => console.error(error))
  }
}

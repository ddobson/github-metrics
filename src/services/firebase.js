import * as firebase from 'firebase'

const initializeFirebase = function() {
  const config = {
    apiKey: 'AIzaSyAG88BJ6i11DUYo7IlwuV8SazKkWjHfrEI',
    authDomain: 'github-stats-1c46d.firebaseapp.com',
    databaseURL: 'https://github-stats-1c46d.firebaseio.com',
    projectId: 'github-stats-1c46d',
    storageBucket: 'github-stats-1c46d.appspot.com',
    messagingSenderId: '39728152172',
  }

  firebase.initializeApp(config)
}

export default initializeFirebase

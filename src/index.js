import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import initializeFirebase from './services/firebase'

// Components
import App from './components/App'

// Styles
import './styles/index.scss'

initializeFirebase()

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()

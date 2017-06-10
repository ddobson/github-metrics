import React from 'react'
import { connect } from 'react-redux'
import { authWithGithub } from '../actions/user'
import logo from '../images/logo.svg'
import '../styles/App.scss'

const App = function(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={() => props.authWithGithub()}>click me</button>
      <button onClick={() => console.log(props.user)}>log state</button>
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    authWithGithub: () => dispatch(authWithGithub()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

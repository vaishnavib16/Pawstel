import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import LoginForm from './components/loginForm'
import NotFound from './views/not-found'
import SignUpForm from './components/signUpForm'
import ServicePage from './components/servicepage'
import UserPortal from './components/UserPortal'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={LoginForm} path="/login" />
        <Route component={SignUpForm} path="/signup" />
        <ProtectedRoute component={ServicePage} exact path="/servicepage" />
        <ProtectedRoute component={UserPortal} exact path="/userportal" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />


      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

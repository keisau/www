import React, { Component } from 'react'
import {
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import {
  App,
  Blog,
  Home,
  NotFound,
} from './components'

import history from './history'

export default (
  <Router history={history}>
    <App>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/blog/:article' component={Blog} />
        <Redirect from='/' to='/home' />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
)

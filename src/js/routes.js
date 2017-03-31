import React, { Component } from 'react'
import {
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push,
} from 'react-router-redux'

import { Provider } from 'react-redux'

import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import {
  Blog,
  Home,
  NotFound,
} from './components'

import history from './history'

import reducers from './redux/reducers'

import {
  App,
  Blog as BlogPage,
} from './redux/containers'

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

export default (
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/blog' exact component={BlogPage} />
          <Route path='/blog/:article' component={Blog} />
          <Redirect from='/' to='/home' />
          <Route component={NotFound} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
)

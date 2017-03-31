import React from 'react'
import { connect } from 'react-redux'

import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import {
  Link
} from 'react-router-dom'

const nav = [
  { path: '/home', title: 'home' },
  { path: '/blog', title: 'blog' }
]

const appComponent = function appComponent(props) {
  const { children } = props
  const { pathname } = props.router.location

  const navbarContents = nav.map(({ path, title }, index) => {
    const regex = new RegExp(path, 'iu')

    return (
      <NavItem key={`nav:${index}`} >
        <NavLink
          tag={Link}
          to={path}
          active={ regex.test(pathname) } >
          { title }
        </NavLink>
      </NavItem>
    )
  })

  return (
    <div id='appContainer'>
      <Nav pills>
        { navbarContents }
      </Nav>
      { React.Children.only(children) }
    </div>
  )
}

export default connect(state => state)(appComponent)

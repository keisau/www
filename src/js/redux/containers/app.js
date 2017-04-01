import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  NavItem,
  NavLink,
} from 'reactstrap'

import {
  Link
} from 'react-router-dom'

const nav = [
  { path: '/blog', title: 'blog' },
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render() {
    const { children } = this.props
    const { pathname } = this.props.router.location

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
        <Navbar color='faded' light toggleable >
          <NavbarToggler right onClick={
            e => this.setState({ isOpen: !this.state.isOpen })
          } />
          <NavbarBrand tag={Link} to='/home' >pierresaux</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar >
              { navbarContents }
            </Nav>
          </Collapse>
        </Navbar>
        <div id='appContent' >
          { React.Children.only(children) }
        </div>
        <div id='footer' >
          <i className='fa fa-copyright' aria-hidden='true'></i> pierresaux . by Keisau CHING
          <br />
          <a href='https://github.com/pierresaux'>
            <i className='fa fa-github' aria-hidden='true'></i> Github : pierresaux
          </a>
          <br />
          <a href='mailto:keisau.ching@pierresaux.me'>
            <i className="fa fa-envelope-o" aria-hidden="true"></i> keisau.ching@pierresaux.me
          </a>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(App)

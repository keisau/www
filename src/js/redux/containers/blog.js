import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import {
  Link
} from 'react-router-dom'

import renderBlog from '../../lib/render-blog'
import markdowns from '../../../md'

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nextIndex: 0,
      blogs: [],
      error: null,
    }

    this.loadMore = (
      <Button id='blogLoadMore' onClick={ event => {
        this.getEntry(this.state.nextIndex)
        event.preventDefault()
      }} >
        Load more...
      </Button>
    )

    this.noMore = (
      <Button id='blogNoMore' disabled >
        No more post.
      </Button>
    )
  }

  async getEntry(index) {
    if (index > markdowns.length - 1) {
      return
    }

    const { path, title, createdAt } = markdowns[index]
    const url = `/markdown${path}.md`

    try {
      const res = await fetch(url)

      if (res.ok) {
        const md = await res.text()
        const blogs = this.state.blogs.concat([
          renderBlog({ title, createdAt, md, index })
        ])

        this.setState({ blogs, nextIndex: index + 1 })

        document.title = 'Blog | pierresaux'
      } else {
        throw true
      }
    } catch(error) {
      this.setState({ error })
    }
  }

  componentWillMount() {
    document.title = 'Loading | pierresaux'

    this.getEntry(this.state.nextIndex)
  }

  render() {
    const { loadMore, noMore, state: { nextIndex } } = this
    const loader = nextIndex === markdowns.length ? noMore : loadMore

    return (
      <div id='blogContainer'>
        <Container>
          <Row>
            <Col>
              { this.state.blogs }
              { loader }
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(Blog)

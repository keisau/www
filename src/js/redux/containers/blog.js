import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import hljs from '../../lib/highlight'

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
      nextIndex: markdowns.length - 1,
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
    if (index < 0) {
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

        this.setState({ blogs, nextIndex: index - 1 })

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

  highlight() {
    const domNode = findDOMNode(this)
    const nodes = domNode.querySelectorAll('pre code:not(.highlighted)')

    nodes.forEach(node => {
      hljs.highlightBlock(node)
      node.className = `${node.className} highlighted img-thumbnail`
    })
  }

  componentDidUpdate() {
    const { blogs } = this.state

    if (blogs.length > 0) {
      this.highlight()
    }
  }

  render() {
    const { loadMore, noMore, state: { nextIndex } } = this
    const loader = nextIndex < 0 ? noMore : loadMore

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

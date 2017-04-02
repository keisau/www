import React, { Component } from 'react'
import marked from 'marked'
import { findDOMNode } from 'react-dom'
import hljs from '../lib/highlight'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

import renderBlog from '../lib/render-blog'
import markdowns from '../../md'

export default class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: null,
      error: null
    }
  }

  async componentDidMount() {
    const index = this.props.match.params.article

    if (index > markdowns.length - 1) {
      document.title = 'Not Found | pierresaux'
      this.setState({ error: true })

      return
    }

    const { path, title, createdAt } = markdowns[index]
    const url = `/markdown${path}.md`

    try {
      const res = await fetch(url)

      if (res.ok) {
        const md = await res.text()
        const blog = renderBlog({ title, createdAt, md, index })

        this.setState({ blog })

        document.title = 'Blog | pierresaux'
      } else {
        throw true
      }
    } catch(error) {
      document.title = 'Not Found | pierresaux'
      this.setState({ error })
    }
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
    const { blog } = this.state

    if (blog != null) {
      this.highlight()
    }
  }

  componentWillMount() {
    document.title = 'Loading | pierresaux'
  }

  getComponent() {
    const { blog, error } = this.state

    if (blog != null) {
      return blog
    } else if (error != null) {
      return (
        <div id='blogNotFound'>
          <h1>No such entry :(</h1>
        </div>
      )
    } else {
      return (
        <div id='blogEntry'>loading...</div>
      )
    }
  }

  render() {
    return (
      <div id='blogContainer' className='hideFooter' >
        <Container>
          <Row>
            <Col>
              { this.getComponent() }
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

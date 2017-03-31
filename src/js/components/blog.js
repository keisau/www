import React, { Component } from 'react'
import marked from 'marked'

import markdowns from '../../md'

export default class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: null,
      error: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.article

    if (id > markdowns.length - 1) {
      document.title = 'Not Found | pierresaux'
      this.setState({ error: true })

      return
    }

    const { path, title } = markdowns[id]
    const url = `/markdown/${path}.md`

    fetch(url).then(res => {
      if (res.ok) {
        return res.text()
      } else {
        return Promise.reject(true)
      }
    }).then(md => {
      document.title = 'Blog | pierresaux'

      const html = marked(md)

      this.setState({
        blog:(
          <div className='blogContent' key='unique'>
            <div className='blogTitle' >
              { title }
            </div>
            <div className='blogEntry' dangerouslySetInnerHTML={{ __html: html }} ></div>
          </div>
        )
      })
    }).catch(error => {
      document.title = 'Not Found | pierresaux'
      this.setState({ error })
    })
  }

  /*
  highlight() {
    const domNode = findDOMNode(this)
    const nodes = domNode.querySelectorAll('pre code')

    nodes.forEach(node => hljs.highlightBlock(node))
  }

  componentDidUpdate() {
    const { html } = this.state
    const { hash } = this.props.location

    if (html != null) {

      this.highlight()

      if (hash != null) {
        const anchorName = hash.replace('#', '')
        const element = document.getElementsByName(anchorName)[0]

        if (element != null) {
          element.focus()
        }
      }
    }
  }
  */
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
      <div id='blogContainer' >
        {
          this.getComponent()
        }
      </div>
    )
  }
}

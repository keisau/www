import React, { Component } from 'react'
import marked from 'marked'

export default class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null,
      error: null
    }
  }

  componentDidMount() {
    const url = `/markdown/${this.props.match.params.article}`

    console.log(url)
    fetch(url).then(res => {
      console.log(res)
      if (res.ok) {
        return res.text()
      } else {
        return Promise.reject(true)
      }
    }).then(content => {
      console.log(content)
      document.title = 'Blog | pierresaux'
      this.setState({ content })
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
    const { content } = this.state
    const { hash } = this.props.location

    if (content != null) {

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
  render() {
    const { content, error } = this.state

    if (content != null) {
      const html = marked(content)
      return (
        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
      )
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
}

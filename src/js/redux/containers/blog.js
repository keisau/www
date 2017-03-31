import React, { Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import {
  Link
} from 'react-router-dom'

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
      <div id='blogLoadMore' onClick={ event => {
        this.getEntry(this.state.nextIndex)
        event.preventDefault()
      }} >
        Load more...
      </div>
    )

    this.noMore = (
      <div id='blogNoMore' >
        No more post.
      </div>
    )
  }

  async getEntry(index) {
    if (index > markdowns.length - 1) {
      return
    }

    const { path, title } = markdowns[index]
    const url = `/markdown${path}.md`

    try {
      const res = await fetch(url)

      if (res.ok) {
        const raw = await res.text()
        const blogs = this.state.blogs.concat([
          (
            <div className='blogContent' key={`blog:index:${index}`} >
              <div className='blogTitle' >
                { title }
              </div>
              <div className='blogEntry' dangerouslySetInnerHTML={{ __html: marked(raw) }} ></div>
              <div className='blogFooter' ><hr /></div>
            </div>
          )
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
        { this.state.blogs }
        { loader }
      </div>
    )
  }
}

export default connect(state => state)(Blog)

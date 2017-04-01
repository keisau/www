import React from 'react'
import marked from 'marked'

export default function renderBlog({ title, md, createdAt, index }) {
  return (
    <div className='blogContent' key={`blog:index:${index}`} >
      <div className='blogTitle' >
        <div className='title' >{ title }</div>
        <div className='createdAt' >{ createdAt.format('YYYY-MM-DD') }</div>
        <div className='clear' ></div>
      </div>
      <div className='blogEntry' dangerouslySetInnerHTML={{ __html: marked(md) }} ></div>
      <div className='blogFooter' ><hr /></div>
    </div>
  )
}

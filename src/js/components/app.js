import React from 'react'

export default function appComponent(props) {
  const { children } = props
  console.log('hi')

  return (
    <div id='appContainer'>
      { React.Children.only(children) }
    </div>
  )
}

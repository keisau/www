/* import the markdowns here to let webpack know */

const req = require.context('.', true, /\.md$/)
req.keys().forEach(key => {
  req(key)
})

/* blog contents */
export default [
  {
    path: '/blog/test',
    title: 'Test'
  },
  {
    path: '/blog/test2',
    title: 'Test 2'
  }
]

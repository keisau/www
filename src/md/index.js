import moment from 'moment'

/* import the markdowns here to let webpack know */

const req = require.context('.', true, /\.md$/)
req.keys().forEach(key => {
  req(key)
})

/* blog contents */
export default [
  {
    path: '/blog/hello',
    title: 'Hello!',
    createdAt: moment('2017-03-31'),
  },
]

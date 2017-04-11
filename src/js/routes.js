import App from '../components/app.vue'
import Blogs from '../components/blogs.vue'
import BlogContainer from '../components/blog-container.vue'
import { prefix, posts } from '../blog'

const routes = [
  {
    path: '/',
    component: App,
    redirect: '/blogs',
    children: [
      {
        path: '/blogs',
        component: Blogs,
      },
      ...posts.map(post => ({
        path: `${prefix}/${post.name}`,
        component: BlogContainer,
        props: {
          post
        }
      })),
    ]
  },
]

export default routes

<template lang='pug'>
div#blogsContainer
  div(class='blogContainer', v-if='posts != null', v-for='post in posts')
    blog(:post='post', :linked='true')
</template>

<script>
import Blog from './blog.vue'
import { posts } from '../blog'
import { sendBlogsView } from '../lib/ga'

export default {
  data() {
    document.title = 'Blogs | Keisau CHING'

    return {
      posts
    }
  },
  components: {
    Blog
  },
  mounted() {
    sendBlogsView()
  }
}

</script>

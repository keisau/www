<template lang='pug'>
div#blogsContainer
  div(class='blogContainer', v-if='post != null')
    blog(:post='post')
</template>

<script>
import Blog from './blog.vue'
import { sendBlogView } from '../lib/ga'

export default {
  props: [ 'post' ],
  data() {
    return {}
  },
  components: {
    Blog
  },
  mounted() {
    const { name } = this.post

    sendBlogView({ name })
  }
}

</script>

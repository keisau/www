<template lang='pug'>
div#blogsContainer
  div(class='blogContainer', v-if='post != null')
    blog(:post='post')
</template>

<script>
import Blog from './blog.vue'

export default {
  props: [ 'post' ],
  data() {
    return {}
  },
  components: {
    Blog
  }
}

</script>

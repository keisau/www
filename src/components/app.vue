<template lang='pug'>
div#appContainer
  div#appContent
    sidebar
    router-view
    app-footer
</template>

<script>
import Sidebar from './sidebar.vue'
import Blogs from './blogs.vue'
import AppFooter from './app-footer.vue'

export default {
  components: {
    Sidebar,
    Blogs,
    AppFooter,
  }
}
</script>

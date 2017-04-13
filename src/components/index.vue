<template lang='pug'>
div#rootContainer
  router-view
</template>

<script>
import { initGoogleAnalytics } from '../lib/ga'

export default {
  created() {
    initGoogleAnalytics()
  }
}
</script>

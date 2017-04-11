<template lang='pug'>
div(class='blogContent', v-if='post != null')
  div.blogHeader
    a(v-if='linked', :href!='`${prefix}/${name}`')
      span( class='title', v-text='title')
    span(v-if='!linked', class='title', v-text='title')
    span(class='createdAt', v-text='createdAt')
  div(class='blogEntry', v-html='html')
  div.blogFooter
    div(class='authorsContainer', v-for='author in authors')
      a(:href='`mailto:${author.email}`', v-text='author.name')
      br
      a(:href='`//github.com/${author.github}`')
        i(class='fa fa-github', aria-hidden='true')  github
</template>

<script>
import marked from 'marked'
import { prefix } from '../blog'

export default {
  props: [
    'post',
    'linked',
  ],
  data() {
    if (this.post == null) return {}

    const {
      name,
      title,
      md,
      authors,
      createdAt,
    } = this.post

    return {
      prefix,
      name,
      title,
      html: marked(md),
      authors,
      createdAt: createdAt.format('YYYY-MM-DD'),
    }
  }
}

</script>

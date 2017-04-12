<template lang='pug'>
div#sidebarContainer
  h1
    a(href='/') Keisau CHING

  div#contacts
    a(href='//facebook.com/keisau.ching')
      i(class='fa fa-facebook-square', aria-hidden='true')
      | keisau.ching
    br
    a(href='//github.com/pierresaux')
      i(class='fa fa-github', aria-hidden='true')
      | github.com/pierresaux
    br
    a(href='mailto:keisau.ching@pierresaux.me')
      i(class='fa fa-envelope', aria-hidden='true')
      | keisau.ching@pierresaux.me


  p #Software Engineer
    i(class='fa fa-code', aria-hidden='true')
  p #Chinese Calligraphy
    i(class='fa fa-pencil', aria-hidden='true')
  p #IPSC Action Air
    i(class='fa fa-bullseye', aria-hidden='true')
  p #Philosophy
    i(class='fa fa-comment', aria-hidden='true')
  p #Hong Kong
    i(class='fa fa-globe', aria-hidden='true')

  div#divider.responsiveHidden
    div.bubble
    div.bubble
    div.bubble
    div.bubble
    div.bubble
</template>

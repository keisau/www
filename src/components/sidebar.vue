<template lang='pug'>
div#sidebarContainer
  h1
    a(href='/') Keisau CHING

  div#contacts
    a(href='mailto:keisau.ching@pierresaux.me')
      i(class='fa fa-envelope', aria-hidden='true')  keisau.ching@pierresaux.me
    br
    a(href='//github.com/pierresaux')
      i(class='fa fa-github', aria-hidden='true')  github.com/pierresaux

  p #SoftwareEngineer
    i(class='fa fa-code', aria-hidden='true')
  p #ChineseCalligraphy
    i(class='fa fa-pencil', aria-hidden='true')
  p #Philosophy
    i(class='fa fa-comment', aria-hidden='true')

  div#divider.responsiveHidden
    div.bubble
    div.bubble
    div.bubble
    div.bubble
    div.bubble
</template>

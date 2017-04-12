import moment from 'moment'

export const prefix = '/blog'

export const postObj = {
  'vue-js': {
    title: 'Hello! Vue.js',
    authors: [
      {
        name: 'Keisau CHING',
        email: 'keisau.ching@pierresaux.me',
        github: 'pierresaux',
      }
    ],
    createdAt: moment('2017-04-11 17:27:15'),
  },
  'learning-is-endless': {
    title: 'Learning is Endless',
    authors: [
      {
        name: 'Keisau CHING',
        email: 'keisau.ching@pierresaux.me',
        github: 'pierresaux',
      }
    ],
    createdAt: moment('2017-04-12 17:53:33'),
  }
}

export const names = Object.keys(postObj)

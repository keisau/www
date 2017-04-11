import moment from 'moment'

export const prefix = '/blog'

export const postObj = {
  newblog: {
    title: 'A new hope',
    authors: [
      {
        name: 'Keisau CHING',
        email: 'keisau.ching@pierresaux.me',
        github: 'pierresaux',
      }
    ],
    createdAt: moment('2017-04-03'),
  },
  hello: {
    title: 'Hello!',
    authors: [
      {
        name: 'Keisau CHING',
        email: 'keisau.ching@pierresaux.me',
        github: 'pierresaux',
      }
    ],
    createdAt: moment('2017-03-31'),
  }
}

export const names = Object.keys(postObj)

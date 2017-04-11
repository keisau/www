import { postObj, names, prefix as _prefix } from './post-obj'

const basePath = './md'
const md = function lazyMarkdownRequire(name) {
  return require(`${basePath}/${name}.md`)
}

export const prefix = _prefix

export const posts = names.map(name => Object.assign({}, postObj[name], {
  name,
  md: md(name),
})).sort((a, b) => b.createdAt.diff(a.createdAt))

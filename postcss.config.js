module.exports = {
  plugins: [
    require('postcss-discard-unused')(),
    require('postcss-smart-import')(),
    require('precss')(),
    require('autoprefixer')()
  ]
}

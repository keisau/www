module.exports = {
  plugins: [
    require('postcss-discard-unused')({
      fontFace: false /* for font-awesome */
    }),
    require('postcss-smart-import')(),
    require('precss')(),
    require('autoprefixer')()
  ]
}

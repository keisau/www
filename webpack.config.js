const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build'),
}

const plugins = [
  new ExtractTextPlugin(path.resolve(paths.build, 'stylesheets/main.css'))
]

const output = {
  filename: path.resolve(paths.build, 'scripts/bundle.js'),
  libraryTarget: 'umd',
  publicPath: '/',
  path: paths.build
}

const rules = [
  {
    test: /src\/assets\/.*$/,
    loader: 'file-loader?limit=16384&name=assets/[name].[ext]',
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            'es2017'
            'es2016',
            'es2015',
            'react',
          ],
          plugins: [
            'transform-es2015-modules-commonjs'
          ]
        }
      }
    ]
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader!sass-loader'
    })
  },
  { test: /\.json$/, loader: 'json-loader' }
]

module.exports = function(env) {
  return {
    entry:  [
      path.resolve(paths.src, 'index.js'),
    ],
  }
}

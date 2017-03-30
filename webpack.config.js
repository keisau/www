const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build'),
}

const plugins = [
  new ExtractTextPlugin('stylesheets/main.css')
]

const output = {
  filename: 'scripts/bundle.js',
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
            'es2017',
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
  {
    test: /\.md$/,
    loader: 'file-loader?limit=16384&name=markdown/[name].[ext]',
  },
  { test: /\.json$/, loader: 'json-loader' }
]

const devServer = {
  contentBase: paths.build,
  compress: true,
  historyApiFallback: {
    rewrites: [
      {
        from: /^\/markdown\/.*$/,
        to({ parsedUrl }) {
          return `${parsedUrl.pathname}.md`
        }
      }
    ]
  },
}

module.exports = function(env = {}) {
  const isProduction = !!env.production || process.env.NODE_ENV === 'production'

  return isProduction ? {
    entry:  [
      'whatwg-fetch',
      path.resolve(paths.src, 'js/index.js')
    ],
    output,
    module: {
      rules
    },
    plugins,
  } : {
    entry:  [
      'whatwg-fetch',
      path.resolve(paths.src, 'js/index.js')
    ],
    output,
    module: {
      rules
    },
    devtool: 'source-map',
    plugins,
    devServer
  }
}

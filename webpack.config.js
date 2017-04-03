const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build'),
}

const entry = {
  'babel-polyfill': 'babel-polyfill',
  'whatwg-fetch': 'whatwg-fetch',
  'react-family': [
    'react',
    'react-dom',
    'react-addons-css-transition-group',
    'react-addons-transition-group',
    'react-redux',
    'react-router-dom',
    'react-router',
    'react-router-redux',
    'redux',
    'reactstrap',
  ],
  highlight:  [
    'highlight.js/lib/highlight',
    'highlight.js/lib/languages/cpp',
    'highlight.js/lib/languages/css',
    'highlight.js/lib/languages/python',
    'highlight.js/lib/languages/scss',
    'highlight.js/lib/languages/javascript',
    'highlight.js/lib/languages/xml',
  ],
  vendor: [
    'moment/moment',
    'marked',
  ],
  main: path.resolve(paths.src, 'js/index.js')
}

const plugins = [
  new ExtractTextPlugin('stylesheets/main.css'),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.optimize.CommonsChunkPlugin({
    name: [
      'vendor',
      'manifest',
      'babel-polyfill',
      'react-family',
      'highlight',
    ]
  }),
]

const output = {
  filename: 'scripts/[name].js',
  libraryTarget: 'umd',
  publicPath: '/',
  path: paths.build
}

const rules = [
  {
    test: /src\/assets\/.*$/,
    loader: 'file-loader?limit=16384&context=src/assets&name=assets/[path][name].[ext]',
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
            'transform-es2015-modules-commonjs',
            'transform-object-rest-spread',
          ]
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        'postcss-loader'
      ]
    })
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    })
  },
  {
    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader?name=fonts/[name].[ext]'
  },
  {
    test: /\.md$/,
    loader: 'file-loader?limit=16384&name=markdown/blog/[name].[ext]',
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
          return `${parsedUrl.pathname}`
        }
      }
    ]
  },
}

module.exports = function(env = {}) {
  const isProduction = !!env.production || process.env.NODE_ENV === 'production'

  return isProduction ? {
    entry,
    output,
    module: {
      rules
    },
    plugins,
  } : {
    entry,
    output,
    module: {
      rules
    },
    devtool: 'source-map',
    plugins,
    devServer
  }
}

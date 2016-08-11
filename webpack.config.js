var path = require('path')
var webpack = require('webpack')

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: [path.join(__dirname, 'src')],
    vendor: ['react', 'react-dom', 'react', 'react-redux', 'react-dnd', 'react-dnd-html5-backend']
  },
  module: {
    loaders: [
      {
        test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    chunkFilename: 'vendor-[chunkhash].js'
  },
  plugins: [
    // See https://github.com/webpack/webpack/tree/master/examples/chunkhash
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor'}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html'),
      inject: 'body'
    })
  ],
  resolve: {
    root: path.resolve(__dirname, 'src'),
    modulesDirectories: ['node_modules']
  },
  devtool: '#inline-source-map'
}
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: ['file-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".json"]
  }
}
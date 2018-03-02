var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPugPlugin = require('../..');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackMajorVersion = require('webpack/package.json').version.split('.')[0];

module.exports = {
  entry: './example.js',
  output: {
    path: path.join(__dirname, 'dist/webpack-' + webpackMajorVersion),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      { test: /\.png$/, use: 'file-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'template.html'
    }),
    new HtmlWebpackPlugin({
      template: 'template.pug',
      filetype: 'pug'
    }),
    new HtmlWebpackPlugin({
      template: 'template-tab.pug',
      filename: 'index-tab.pug'
    }),
    new HtmlWebpackPugPlugin()
  ]
};

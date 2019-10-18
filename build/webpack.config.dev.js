const { resolve } = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const _ = path => resolve(__dirname, path);

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 8080,
    host: 'localhost',
    open: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: _('../index.html'),
      inject: 'head',
    }),
  ],
});

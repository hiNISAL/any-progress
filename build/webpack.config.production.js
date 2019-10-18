const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const webpack = require('webpack');

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new webpack.BannerPlugin(`accepts
Copyright(c) ${ new Date().getFullYear() } NISAL
MIT Licensed`),
  ],
});

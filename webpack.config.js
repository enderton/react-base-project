/*
Only use ES5 in this file for now
*/
'use strict';

var path = require('path');

module.exports = {
  entry: './client/app.jsx',

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }, {
        test: /\.less$/,
        exclude: [/node_modules/],
        loaders: [
          'style',
          'css',
          'less'
        ]
      }
    ]
  },

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.less'
    ]
  }
};

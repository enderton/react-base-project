/* Only use ES5 in this file */
'use strict';

var webpack = require('webpack');
var path = require('path');

var environment = process.env.NODE_ENV || 'production';

var webpackConfig = {
  entry: './client/app.jsx',

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }, {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.less'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    })
  ]
};

if (environment === 'production') {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  webpackConfig.devtool = 'cheap-module-source-map';
}

module.exports = webpackConfig;

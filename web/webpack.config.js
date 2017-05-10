var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'wwwroot/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: APP_DIR + '/components/App.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: '/wwwroot/',
    filename: 'bundle.js'
  },
  module: {
   rules: [
     {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
     },
     {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
     }
   ]
  }
};

module.exports = config;
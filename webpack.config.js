var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./js/app.js"
  },
  output: {
    path: __dirname + "/js",
    filename: "build.js",
    library: "home"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};

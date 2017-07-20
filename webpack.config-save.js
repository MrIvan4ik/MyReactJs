var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
      }, {
            test: /\.(sass|scss)$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('sass-loader', 'css!resolve-url!sass?sourceMap')

        },
    ]
  },
  plugins: [
  new webpack.DefinePlugin({
    ON_TEST: process.env.NODE_ENV === 'test'
  }),
  new ExtractTextPlugin('styles.css')
  ]
};

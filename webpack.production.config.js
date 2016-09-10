'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: [
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new WebpackMd5Hash(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: 'app/index.tpl.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015", "stage-2", "react"]
      }
    },
      {
        test: /\.json?$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }, {
        test: /\.(webm|mp4)$/,
        exclude: /node_modules/,
        loader: 'file'
      },
      {test: /\.ico$/,exclude: /node_modules/, loader: 'file?name=[name].[ext]'},
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/,exclude: /node_modules/, loader: 'file' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,exclude: /node_modules/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,exclude: /node_modules/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!cssnext')
      }]
  }
};

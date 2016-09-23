'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    __dirname + '/app/main.js'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }, {
        test: /\.json?$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: true, pngquant:{quality: "65", speed: 4}}'
        ]
      }, {
        test: /\.(webm|mp4)$/,
        exclude: /node_modules/,
        loader: 'file'
      }
      , {
        test: /\.(ico|icns)$/,
        exclude: /node_modules/,
        loader: "url?limit=8192"
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,exclude: /node_modules/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,exclude: /node_modules/, loader: "file-loader" }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!cssnext')
      }]
  }
};

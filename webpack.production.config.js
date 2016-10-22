'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var CompressionPlugin = require("compression-webpack-plugin");
var precss = require('precss');
var autoprefixer = require('autoprefixer');
// const OfflinePlugin = require('offline-plugin');

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
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    // new OfflinePlugin({
    //   relativePaths: false,
    //   publicPath: '/',

    //   // No need to cache .htaccess. See http://mxs.is/googmp,
    //   // this is applied before any match in `caches` section
    //   excludes: ['.htaccess'],

    //   caches: {
    //     main: [':rest:'],

    //     // All chunks marked as `additional`, loaded after main section
    //     // and do not prevent SW to install. Change to `optional` if
    //     // do not want them to be preloaded at all (cached only when first loaded)
    //     additional: ['*.chunk.js'],
    //   },

    //   // Removes warning for about `additional` section usage
    //   safeToUseOptionalCaches: true,

  //   AppCache: false,
  // }),
  ],
  module: {
    loaders: [
      {
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
        test: /\.(jpe?g|png|gif)$/,
        exclude: /node_modules/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ]
      }, {
        test: /\.(webm|mp4)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ico|icns)$/,
        exclude: /node_modules/,
        loader: "url?limit=8192"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
      }]
  },
  postcss: function() {
    return [precss, autoprefixer];
  }
};

/* eslint no-console: 0 */
"use strict";

const path = require('path');
const express = require('express');
const compression = require('compression')

const isDeveloping = process.env.DEV_MODE !== 'production';
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000;
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const app = express();

const bodyParser = require('body-parser');
// [SH] Bring in the data model
require('./server/db');
// // [SH] Bring in the Passport config after model is defined
require('./server/passport');
var routes = require('./server/index');

app.use(bodyParser.json());

app.use('/api', routes);

if (isDeveloping) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('./webpack.config.js');
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: false,
    quiet: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    },

  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(compression())
  app.use(express.static(__dirname + '/dist', {
    maxAge: 86400000
  }));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, ip, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.log('Server running on http://%s:%s', ip, port);
});

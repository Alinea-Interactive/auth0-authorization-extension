'use strict';

const webpack = require('webpack');
const logger = require('../../server/lib/logger');

const WEBPACK_HOST = 'localhost';
const WEBPACK_PORT = 8080;

// Override base configuration.
const config = require('./config.base.js');
config.devtool = 'eval-source-map';
config.debug = true;
config.entry = [
  'babel-polyfill',
  `webpack-dev-server/client?http://${WEBPACK_HOST}:${WEBPACK_PORT}`,
  'webpack/hot/only-dev-server',
  config.entry.app
];
config.output.publicPath = `http://localhost:8080{config.output.publicPath}`;

// Stats configuration.
config.stats = {
  colors: true,
  reasons: true
};

// Development modules.

// Webpack plugins.
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;

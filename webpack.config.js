const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const productionConfig = require('./webpack.config.prod');
const developmentConfig = require('./webpack.config.dev');

module.exports =
  process.env.NODE_ENV === 'development'
    ? merge(common, developmentConfig)
    : merge(common, productionConfig);

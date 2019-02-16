const chalk = require('chalk');
const os = require('os');
const buildPaths = require('./config/build-paths');

const DEV = 'development';
const PROD = 'production';

let webpackConfig;
switch (process.env.NODE_ENV) {
  case PROD:
    console.log(`Loading PROD webpack config [${chalk.cyan(buildPaths.pkgName)}]`, os.EOL);
    webpackConfig = require('./config/webpack.config.prod')();
    break;
  case DEV:
  default:
    console.log(`Loading DEV webpack config [${chalk.cyan(buildPaths.pkgName)}]`, os.EOL);
    webpackConfig = require('./config/webpack.config.dev')();
}

module.exports = webpackConfig;

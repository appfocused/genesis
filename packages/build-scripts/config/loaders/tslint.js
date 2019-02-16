const fs = require('fs');
const buildPaths = require('../build-paths');

const configFilePath = buildPaths.resolve('tslint.json');
const hasTSLint = fs.existsSync(configFilePath);

let config = {};

if (hasTSLint) {
  config = JSON.parse(fs.readFileSync(configFilePath));
}

module.exports = options => ({
  test: /\.(ts)x?$/,
  enforce: 'pre',
  use: [
    {
      loader: 'tslint-loader',

      options: {
        emitErrors: true,
        configuration: {
          rules: config || {}
        }
      }
    }
  ]
});

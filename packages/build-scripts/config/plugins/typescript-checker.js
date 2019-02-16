const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const resolve = require('resolve');
const path = require('path');
const fs = require('fs');
const buildPaths = require('../build-paths');

const configFilePath = buildPaths.resolve('tsconfig.json');
const hasTSConfig = fs.existsSync(configFilePath);

module.exports = options =>
  new ForkTsCheckerWebpackPlugin({
    typescript: resolve.sync('typescript', {
      basedir: path.resolve(__dirname, 'node_modules')
    }),
    async: false,
    checkSyntacticErrors: true,
    tsconfig: configFilePath,
    compilerOptions: {
      module: 'esnext',
      moduleResolution: 'node',
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'preserve'
    },
    reportFiles: [
      '**',
      '!**/*.json',
      '!**/__tests__/**',
      '!**/?(*.)(spec|test).*',
      '!**/src/setupProxy.*',
      '!**/src/setupTests.*'
    ],
    watch: buildPaths.src,
    silent: true,
    formatter: typescriptFormatter
  });

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const devServer = require('./dev-server');
const fs = require('fs');
const buildPaths = require('./build-paths');
const indexPath = buildPaths.path.join(buildPaths.src, 'index.html');
const hasTemplate = fs.existsSync(indexPath);

module.exports = options => ({
  entry: [require.resolve('react-dev-utils/webpackHotDevClient'), buildPaths.src],
  mode: 'development',
  bail: false,
  output: {
    filename: 'static/js/bundle.js',
    path: buildPaths.dist
  },

  resolve: {
    symlinks: true,
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      require('./loaders/eslint')(),
      require('./loaders/typed-css')(),
      require('./loaders/typescript')(),
      require('./loaders/css')({ hasModules: false, isEnvProduction: false }),
      require('./loaders/css')({ hasModules: true, isEnvProduction: false })
    ]
  },

  plugins: [
    hasTemplate &&
      new HtmlWebpackPlugin({
        inject: true,
        template: indexPath
      }),
    new webpack.HotModuleReplacementPlugin(),
    require('./plugins/typescript-checker')(),
    new WebpackAssetsManifest()
  ].filter(Boolean),

  devServer
});

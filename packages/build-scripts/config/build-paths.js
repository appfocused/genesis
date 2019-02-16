const path = require('path');
const fs = require('fs');

const CWD = fs.realpathSync(process.cwd());
const PKG_JSON_PATH = path.resolve(CWD, 'package.json');
const NODE_MODULES = 'node_modules';

const buildPaths = {
  publicPath: '/',
  cwd: CWD,
  dist: path.resolve(CWD, 'dist'),
  src: path.resolve(CWD, 'src'),
  style: path.resolve(CWD, 'style'),
  path,
  resolve: path.resolve.bind(CWD),
  resolvePackagePath: name => {
    return path.resolve(CWD, NODE_MODULES, name);
  },
  pkgName: require(PKG_JSON_PATH).name
};

module.exports = buildPaths;

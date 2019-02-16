const buildPaths = require('../build-paths');

module.exports = ({ isEnvProduction } = {}) => {
  return {
    test: /\.(ts|js)x?$/,
    loader: require.resolve('babel-loader'),
    exclude: /node_modules/,
    options: {
      babelrc: false,
      cacheDirectory: true,
      presets: [
        [
          '@babel/env',
          {
            modules: false
          }
        ],
        '@babel/typescript',
        '@babel/react'
      ],
      cacheDirectory: true,
      cacheCompression: isEnvProduction,
      compact: isEnvProduction
    }
  };
};

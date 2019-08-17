const { baseConfig } = require('@appfocused/build-scripts');

if (baseConfig.devServer) {
  baseConfig.devServer = {
    ...baseConfig.devServer,
    proxy: {
      '/api-finance': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api-finance': '' }
      }
    }
  };
}

module.exports = baseConfig;

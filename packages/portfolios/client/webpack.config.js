const { baseConfig } = require('@appfocused/build-scripts');

if (baseConfig.devServer) {
  baseConfig.devServer = {
    ...baseConfig.devServer,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  };
}

module.exports = baseConfig;

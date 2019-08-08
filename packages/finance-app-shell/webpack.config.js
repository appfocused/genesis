const { baseConfig } = require('@appfocused/build-scripts');

if (baseConfig.devServer) {
  baseConfig.devServer = {
    ...baseConfig.devServer,
    proxy: {
      '/apps/@appfocused/portfolios@0.0.1': {
        target: 'http://localhost:8081',
        pathRewrite: { '^/apps/@appfocused/portfolios@0.0.1': '' },
        clientLogLevel: 'debug'
      }
    }
  };
}

module.exports = baseConfig;

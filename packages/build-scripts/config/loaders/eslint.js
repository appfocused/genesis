const buildPaths = require('../build-paths');

module.exports = options => ({
  test: /\.(js|ts)x?$/,
  enforce: 'pre',
  use: [
    {
      loader: 'eslint-loader',

      options: {
        emitErrors: true,
        formatter: require.resolve('react-dev-utils/eslintFormatter')
      }
    }
  ],
  include: buildPaths.src
});

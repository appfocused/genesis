module.exports = options => ({
  enforce: 'pre',
  test: /\.css$/,
  exclude: /node_modules/,
  loader: 'typed-css-modules-loader'
});

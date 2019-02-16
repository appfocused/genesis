const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const IDENTIFIER_WITH_HASH = '[hash:base64:4]-[local]';
const IDENTIFIER_NO_HASH = '[local]';

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009'
            },
            stage: 3
          })
        ],
        sourceMap: true
      }
    }
  ];

  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: true
      }
    });
  }
  return loaders;
};

module.exports = ({ isEnvProduction, hasModules } = {}) => ({
  test: hasModules ? cssModuleRegex : cssRegex,
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: isEnvProduction ? false : true,
    modules: hasModules,
    ...(hasModules && {
      localIdentName: isEnvProduction ? IDENTIFIER_WITH_HASH : IDENTIFIER_NO_HASH
    })
  }),
  sideEffects: hasModules ? false : true,
  ...(!hasModules && { exclude: cssModuleRegex })
});

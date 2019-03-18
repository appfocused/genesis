let defaultPresets;

if (process.env.BABEL_ENV === 'es') {
  defaultPresets = [];
} else {
  defaultPresets = [
    [
      '@babel/env',
      {
        modules: ['esm', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs'
      }
    ]
  ];
}

module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-react'].concat(defaultPresets),
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx'],
        root: ['./src']
      }
    ]
  ]
};

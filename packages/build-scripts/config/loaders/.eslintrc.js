const fs = require('fs');
const buildPaths = require('../build-paths');

const tsConfigFilePath = buildPaths.resolve('tsconfig.json');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    project: tsConfigFilePath,
    sourceType: 'module'
  }
};

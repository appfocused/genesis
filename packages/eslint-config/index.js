module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  globals: {
    document: false,
    console: false
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 0
  }
};

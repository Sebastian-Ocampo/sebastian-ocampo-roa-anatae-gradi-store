module.exports = {
  extends: [
    './technical-bible',
    './errors',
    './node',
    './style',
    './variables',
    './es6',
    './imports',
    './strict',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};

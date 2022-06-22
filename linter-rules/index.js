module.exports = {
  extends: [
    './technical-bible',
    './errors',
    './es6',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};

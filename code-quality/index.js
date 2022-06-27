module.exports = {
  extends: [
    './code-rules/technical-bible',
    './code-rules/errors',
    './code-rules/es6',
    './code-rules/semantic',
    './code-rules/variables'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};

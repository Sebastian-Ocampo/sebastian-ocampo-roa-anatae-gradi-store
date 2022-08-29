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
  ignorePatterns: ["*.liquid", "assets/*.*"],
  rules: {},
  plugins: ["@html-eslint"],
  overrides: [
    {
      files: ["*.liquid","**/*.liquid"],
      parser: "@html-eslint/parser",
      extends: [
        './html-rules/seo',
        './html-rules/style',
        './html-rules/best-practices',
        './html-rules/accessibility'
      ],
    },
  ],
};

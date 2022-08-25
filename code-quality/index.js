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
  ignorePatterns: ["heading.liquid", "slider.liquid", "assets/*.*"],
  rules: {},
  plugins: ["@html-eslint"],
  overrides: [
    {
      files: ["*.liquid"],
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

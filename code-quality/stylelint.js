module.exports = {
    extends: [
      './styles-rules/technical-bible',
      'stylelint-config-idiomatic-order'
    ].map(require.resolve),
    ignoreFiles: ["**/*.css"],
    rules: {},
    "overrides": [
        {
            "files": ["*.scss", "**/*.scss"],
            "customSyntax": "postcss-scss"
        }
    ],
};

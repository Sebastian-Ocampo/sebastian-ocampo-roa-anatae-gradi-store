module.exports = {
    extends: [
      './styles-rules/technical-bible'
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

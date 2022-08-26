/**
* Style HTML rules Gradiweb conventions
*/
module.exports = {
    rules: {
      // This rule disallows the use of extra spaces around attributes.
      "@html-eslint/no-extra-spacing-attrs": "error",

      // This rule enforces newline between elements.
      "@html-eslint/element-newline": "warn",

      // This rule enforces consistent indentation styles. The default indent is 4spaces.
      "@html-eslint/indent": ["warn", 2],

      // This rule enforces the consistent use of double(") or single(') quotes for element attributes.
      // https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML#Quoting_attributes
      "@html-eslint/quotes": ["error", "double"],

      // This rule disallows the use of empty lines which exceeded the maximum lines allowed.
      "@html-eslint/no-multiple-empty-lines": ["error", { "max": 1 }]
    }
  };

/**
* Style HTML rules Gradiweb conventions
*/
module.exports = {
    rules: {
      // This rule disallow the use of duplicate id attributes.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
      "@html-eslint/no-duplicate-id": "error",

      // This rule disallow the use of inline styles.
      "@html-eslint/no-inline-styles": "error",

      // The <li> tag should be contained in a parent element: <ol>, <ul> or <menu>.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
      "@html-eslint/require-li-container": "error",

      // Disallow using obsolete tags in HTML5
      "@html-eslint/no-obsolete-tags": "error",

      // This rule checks whether the tag has closing tag or not.
      // https://html.spec.whatwg.org/multipage/syntax.html#void-elements
      "@html-eslint/require-closing-tags": [
        "warn",
        {
          "selfClosing": "always"
        }
      ],

      // Enforce to use <meta charset="..."> in the <head></head>.
      "@html-eslint/no-multiple-empty-lines": "error",

      // Disallow usage of unsafe target='_blank'
      "@html-eslint/no-target-blank": "error",

      // This rule enforces use of a valid type attribute for button elements. ("button", "submit", "reset")
      // https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-type
      "@html-eslint/require-button-type": "error",
    }
  };

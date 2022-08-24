/**
* Style HTML rules Gradiweb conventions
*/
module.exports = {
    rules: {
      // The screen reader uses alt attributes in img tag for describing the image.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
      "@html-eslint/require-img-alt": "error",

      // This rule disallow skipping heading levels.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
      "@html-eslint/no-skip-heading-levels": "error",

      // This rule disallow use of user-scalable-no in <meta name="viewport">.
      "@html-eslint/no-non-scalable-viewport": "error",

      // This rule disallows use of positive tabindex attribute.
      "@html-eslint/no-positive-tabindex": "error",

      // Enforce to use <meta name="viewport" ...> in the <head></head>.
      "@html-eslint/require-meta-viewport": "error",

      // This rule disallow use of abstract roles.
      // https://www.w3.org/TR/wai-aria-1.0/roles#abstract_roles
      "@html-eslint/no-abstract-roles": "error",

      // Disallow to use aria-hidden attributes on the body element.
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-hidden_attribute
      "@html-eslint/no-aria-hidden-body": "error",

      // Disallow accesskey attributes.
      "@html-eslint/no-accesskey-attrs": "error",
    }
  };

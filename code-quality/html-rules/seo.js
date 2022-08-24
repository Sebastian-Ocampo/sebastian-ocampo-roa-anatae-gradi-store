/**
* SEO rules Gradiweb conventions
*/
module.exports = {
    rules: {
      // The lang attribute is used to represent the language used in the content.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
      "@html-eslint/require-lang": "error",

      // This rule disallow the usage of multiple <h1></h1> tags.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
      "@html-eslint/no-multiple-h1": "error",

      // <title><title/> tag is used to define the document's title.
      // The content of the title is used by the search engine to decide the order of search results.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
      "@html-eslint/require-title": "error",

      // Enforce to use <meta name="description" ...> in the <head></head>
      // https://moz.com/learn/seo/meta-description
      "@html-eslint/require-meta-description": "error"
    }
  };

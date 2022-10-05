/**
* Variables Gradiweb rules
*/

const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {

    // Requires let or const instead of var.
    // https://eslint.org/docs/rules/no-var
    'no-var': "error",

    // disallow deletion of variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow shadowing of names such as arguments
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // https://eslint.org/docs/rules/no-undef-init
    //'no-undef': 'error',

    // disallow use of undefined when initializing variables
    // https://eslint.org/docs/rules/no-undef-init
    //'no-undef-init': 'error',

    // disallow declaration of variables that are not used in the code
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // disallow use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
  }
};

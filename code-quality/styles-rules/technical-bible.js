/**
* Error Styles Technical Bible
*/
module.exports = {
    rules: {
        // Always indent at-rules, rules, comments, declarations, inside parentheses and multi-line values by 2 spaces.
        "indentation": [
            2,
            { baseIndentLevel: 1 }
        ],

        // There must always be a single space before the opening brace.
        "block-opening-brace-space-before": "always",

        // Disallow end-of-line whitespace.
        "no-eol-whitespace": [
            true,
            {
                "ignore": ["empty-lines"]
            }
        ],

        // Disallow extra semicolons
        "no-extra-semicolons": true,

        // Disallow unknown units
        "unit-no-unknown": true,

        // Disallow longhand properties that can be combined into one shorthand property.
        "declaration-block-no-redundant-longhand-properties": true,

        // Specify percentage or number notation for alpha-values.
        "alpha-value-notation": "number",

        // Disallow double-slash comments (//...) which are not supported by CSS and could lead to unexpected results.
        "no-invalid-double-slash-comments": true,

        // Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.
        "font-weight-notation": "numeric",

        // Specify lowercase for keywords values.
        "value-keyword-case": "lower",

        // Specify lowercase for functions name.
        "function-name-case": "lower",

        // Disallow missing generic families in lists of font family names.
        "font-family-no-missing-generic-family-keyword": true,

        // Disallow duplicate selectors within a stylesheet.
        "no-duplicate-selectors": true,

        // BEM class pattern
        "selector-class-pattern": [
            "^\.[a-z0-9]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
            {
                "resolveNestedSelectors": true
            }
        ]
    }
};

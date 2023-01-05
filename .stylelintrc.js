module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
  ],
  plugins: ["stylelint-order", "stylelint-config-rational-order/plugin"],
  rules: {
    "order/properties-order": [[], { severity: 'warning' }],
    "plugin/rational-order": [true, {}],
    "max-nesting-depth": 2,
    "no-descending-specificity": null,
    "no-empty-first-line": null
  },
  overrides: [
    {
      "files": ["**/*.tsx", "**/*.ts"],
      "customSyntax": "@stylelint/postcss-css-in-js"
    }
  ]
};
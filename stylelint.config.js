export default {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['dist/**', 'node_modules/**', 'coverage/**'],
  rules: {
    'color-hex-length': 'short',
    'alpha-value-notation': null,
    'at-rule-empty-line-before': null,
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'custom-property-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    'custom-property-empty-line-before': null,
    'declaration-block-no-duplicate-properties': true,
    'media-feature-range-notation': null,
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'scss/operator-no-unspaced': null,
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$',
      {
        message: 'Class name should use BEM or kebab-case.'
      }
    ],
    'value-keyword-case': null
  }
};

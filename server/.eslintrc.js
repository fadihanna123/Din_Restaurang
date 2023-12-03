// @ts-check
/**
 * @type { import("eslint").Linter.Config }
 */
const config = {
  env: {
    node: true,
    es2023: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsdoc/recommended',
    'plugin:jsdoc/recommended-error',
    'plugin:jsdoc/recommended-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'jsdoc', 'prefer-arrow'],
  rules: {
    'no-console': 'error',
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'import/export': 'off',
    'import/no-unresolved': 'off',
    'jsdoc/check-tag-names': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/no-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'jsdoc/require-param-description': 'off',
  },
};

module.exports = config;

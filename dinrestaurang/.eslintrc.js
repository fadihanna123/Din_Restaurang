// @ts-check
/**
 * @type { import("eslint").Linter.Config }
 */
const config = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
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
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'import', 'jsdoc'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    semi: ['error', 'always'],
    'no-undef': 'off',
    'import/export': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'jsdoc/no-types': 'off',
    'jsdoc/check-tag-names': 'off',
    'import/no-named-as-default': 'off',
  },
};

module.exports = config;

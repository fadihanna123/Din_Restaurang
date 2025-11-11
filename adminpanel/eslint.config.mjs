import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import _import from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import html from 'eslint-plugin-html';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  jsdoc.configs['flat/recommended'],
  {
    files: ['**/*.js'],
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/require-description': 'warn',
    },
  },
  {
    files: ['**/*.html'],
    plugins: { html },
  },
  {
    ignores: ['**/node_modules', '**/build'],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier'
    )
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'jsdoc/no-types': 'off',
      'no-console': 'error',
      indent: ['error', 2],
      'linebreak-style': ['error', 'windows'],

      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],

      semi: ['error', 'always'],
      'no-undef': 'off',
      'import/export': 'off',
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/no-named-as-default': 'off',
      'jsdoc/check-tag-names': 'off',
      'jsdoc/no-undefined-types': 'off',
      'jsdoc/reject-any-type': 'off',
    },
  },
];

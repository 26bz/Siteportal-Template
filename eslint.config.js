import globals from 'globals';
import eslintJs from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js', '**/*.jsx'],
    // Recommended configs from ESLint and React
    extends: [eslintJs.configs.recommended, eslintReact.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser, // window, document, etc.
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@eslint-react/no-missing-key': 'warn', // example override
    },
  },
]);

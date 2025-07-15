import eslintJs from '@eslint/js'
import eslintReact from 'eslint-plugin-react'
import eslintPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: ['lib']
  },
  eslintJs.configs.recommended,
  eslintReact.configs.flat.recommended,
  eslintPrettier,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        inkdrop: true
      }
    },

    rules: {
      'react/prop-types': 'off'
    }
  },

  {
    files: ['**/__tests__/**/*.js', '**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  },

  {
    settings: { react: { version: '18' } }
  }
]

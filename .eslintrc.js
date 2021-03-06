module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:testing-library/react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'no-console': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'max-lines': ['warn', { max: 250 }],
    'arrow-body-style': 1,
    'arrow-spacing': 1,
    camelcase: 0,
    'import/max-dependencies': ['warn', { max: 15 }],
    'import/no-unresolved': 'off',
    'keyword-spacing': 1,
    'max-len': ['error', 120, 2],
    'newline-per-chained-call': 1,
    'no-negated-condition': 1,
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    'no-underscore-dangle': 1,
    'no-whitespace-before-property': 1,
    'no-var': 1,
    'object-shorthand': 1,
    'padded-blocks': ['warn', 'never'],
    'prefer-const': 1,
    'prefer-template': 1,
    'quote-props': ['warn', 'as-needed'],
    'space-before-blocks': 1,
    'space-infix-ops': 1,
    'space-in-parens': ['warn', 'never'],
    'template-curly-spacing': 1,
    'no-tabs': 2,
    // React
    'react/prefer-es6-class': 1,
    //'react/prefer-stateless-function': 1,
    'react/prop-types': 0,
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'no-undef': 'off'
  },
  settings: {
    react: {
      version: 'detect' // Detect react version
    }
  }
};

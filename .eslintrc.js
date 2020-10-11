const path = require('path');

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      project: [path.resolve(__dirname, './tsconfig.json')],
      tsconfigRootDir: __dirname,
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    plugins: [
      '@typescript-eslint',
      'sonarjs',
      'array-func',
      'promise',
      'jest',
      'optimize-regex',
      'prettier',
      'unicorn',
    ],
    env: {
      es6: true,
      browser: true,
      jest: true,
    },
    globals: {
      IS_PRODUCTION: true
    },
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:jest/recommended',
      'plugin:sonarjs/recommended',
      'plugin:promise/recommended',
      'plugin:unicorn/recommended',
      'plugin:prettier/recommended',
      'prettier/react',
      'prettier/unicorn',
      'prettier/@typescript-eslint',
    ],
    rules: {
      'linebreak-style': 0,
      // unicorn
      'unicorn/filename-case': 0,
      'unicorn/no-null': 0,
      'unicorn/prevent-abbreviations': 0,
      // typescript
      '@typescript-eslint/no-unused-vars': 1,
      '@typescript-eslint/unbound-method': 0,
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/ban-ts-ignore': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      // array-func
      'array-func/from-map': 2,
      'array-func/no-unnecessary-this-arg': 2,
      'array-func/prefer-array-from': 2,
      'array-func/avoid-reverse': 2,
      'array-func/prefer-flat-map': 1,
      'array-func/prefer-flat': 1,
      // optimize-regex
      'optimize-regex/optimize-regex': 2,
      // import
      'import/prefer-default-export': 0,
    }
};

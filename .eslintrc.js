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
      'optimize-regex',
      'immutable',
      'prettier'
    ],
    env: {
      es6: true,
      browser: true
    },
    globals: {
      IS_PRODUCTION: true
    },
    extends: [
      'airbnb-typescript',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:sonarjs/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ],
    rules: {
      'linebreak-style': 0,
      'react/jsx-one-expression-per-line': [0, { "allow": "literal" }],
      // typescript
      '@typescript-eslint/no-unused-vars': 1,
      '@typescript-eslint/unbound-method': 0,
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/explicit-function-return-type': 2,
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
      // promise
      'promise/catch-or-return': 2,
      'promise/param-names': 2,
      'promise/always-return': 2,
      'promise/no-new-statics': 2,
      'promise/valid-params': 2,
      // optimize-regex
      'optimize-regex/optimize-regex': 2,
      // import
      'import/prefer-default-export': 0,
      // immutable
      'immutable/no-mutation': 2
    }
};

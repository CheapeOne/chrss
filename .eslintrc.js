module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          // Did this to remove whitespace between groups
          // See config options here for sort groups: https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping
          ['^\\u0000', '^@?\\w', '^[^.]', '^\\.'],
        ],
      },
    ],
    'sort-imports': 'off',
    'import/order': 'off',
    '@typescript-eslint/camelcase': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};

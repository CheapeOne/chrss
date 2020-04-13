module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['simple-import-sort'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
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
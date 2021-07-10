module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    'jest': true
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 0,
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      }
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: 'module',
    jsx: true,
    project: 'tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  root: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'sort-keys': 'warn',
    'sort-vars': 'warn'
  }
};
module.exports = {
  env: {
    node: true,
  },
  extends: ['@herp-inc', '@herp-inc/eslint-config-node'],
  plugins: ['@typescript-eslint', 'node', 'unused-imports'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // project: ['./tsconfig.json'],
    project: ['./tsconfig.eslint.json'],
  },
  ignorePatterns: [],
  rules: {},
};

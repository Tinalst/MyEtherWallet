module.exports = {
  globals: {
    VERSION: "readable",
    ROUTER_MODE: "readable",
    BUILD_TYPE: "readable",
    NODE_ENV: "readable"
  },
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/prettier',
    'eslint:recommended',
    'plugin:security/recommended'
  ],
  rules: {
    'vue/no-v-html': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-else-return': ['error', { allowElseIf: true }],
    'arrow-parens': 'off',
    'generator-star-spacing': 'off',
    semi: 'off',
    'prefer-const': 'error',
    'no-var': 'error',
    'security/detect-new-buffer': 'off',
    'security/detect-object-injection': 'off',
    'require-atomic-updates': 'off',
    'no-prototype-builtins': 'off',
    'no-useless-catch': 'off',
    'no-async-promise-executor': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['security']
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    "no-throw-literal": "off",
    "no-return-assign": "off",
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "curly": ["error", "multi-or-nest"],
    "comma-dangle": ["error", "always-multiline" ],
  },
}

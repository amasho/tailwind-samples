module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  extends: ['@nuxtjs', 'prettier/vue', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'vue', 'prettier', 'import'],
  // add your custom rules here
  rules: {
    'vue/html-end-tags': 'off',
    'comma-dangle': 'off',
    camelcase: 'off',
    'func-names': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-invalid-this': 'off',
    'no-extend-native': 'off',
    'no-unused-vars': 'off',
    'import/order': 'error',
    'import/extensions': 'off',
    'import/no-mutable-exports': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      },
    ],
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'standard/computed-property-even-spacing': 'off',
  },
}

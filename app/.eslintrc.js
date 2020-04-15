const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'airbnb-base'
  ],
  // add your custom rules here
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'max-len': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', resolve(__dirname)],
          ['types', resolve(__dirname, 'types')],
        ],
        extensions: ['.ts', '.js', '.vue', '.json']
      }
    }
  }
}

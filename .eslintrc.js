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
    'nuxt/no-cjs-in-config': 'off'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'],
        ],
        extensions: ['.ts', '.js', '.vue', '.json']
      }
    }
  }
}

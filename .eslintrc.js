module.exports = {
  extends: 'standard',
  env: {
    browser: true
  },
  rules: {
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }]
  }
}

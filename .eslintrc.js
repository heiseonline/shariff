module.exports = {
  root: true,
  extends: 'standard',
  rules: {
    'comma-dangle': [1, 'only-multiline'],
    'indent': ['error', 2, {MemberExpression: 1 }],
    'space-before-function-paren': 0
  },
  env: {
    jasmine: true,
    browser: true,
    node: true
  }
}

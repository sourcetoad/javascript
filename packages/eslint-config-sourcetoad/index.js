module.exports = {
  env: {
      es6: true,
  },
  extends: 'airbnb',
  rules: {
      'no-use-before-define': ['error', { functions: false, classes: false }],
      'no-param-reassign': ['error', { props: false }],
      'func-names': ['error', 'never'],
      'space-before-function-paren': ['error', {
        named: 'never',
        anonymous: 'never',
      }],
      'arrow-parens': ['error', 'as-needed'],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'consistent-return': 0,
      'arrow-body-style': ['error', 'always'],
      'no-unused-expressions': 0,
      indent: 0,
      'no-underscore-dangle': 0,
      'require-jsdoc': ['error', {
        require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: false,
            ArrowFunctionExpression: false,
          },
      }],
  },
  globals: {
      angular: true,
      ionic: true,
      store: true,
      moment: true,
      window: true,
      PushNotification: true,
      analytics: true,
      io: true,
      document: true,
      fetch: true
  },
  parser: 'babel-eslint'
};

module.exports = {
  parser: 'babel-eslint',

  extends: [
    'standard',
    'standard-react',
  ],

  plugins: [
    'jest',
  ],

  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },

  "env": {
    'jest/globals': true,
  },

  globals: {
    __DEV__: true,
  },

  rules: {
    // stylistic
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    'space-before-function-paren': ['error', {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
    }],

    // react
    'react/prop-types': ['off'],
  },
}

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      "jsx": true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  env: {
    browser: true
  },
  plugins: ['babel', 'promise', 'react'],
  rules: {
    "strict": 0,
    'no-fallthrough': 0,
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn"
  }
};
module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['prefer-arrow-functions'],
  rules: {
    camelcase: 'error',
    'import/named': 0,
    'import/order': 'error',
    'import/no-named-as-default-member': 0,
    'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-color-literals': 'warn',
    'react/default-props-match-prop-types': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-multi-comp': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
    'prefer-const': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@env', 'react-native-dotenv'],
          ['_app', './src/app'],
          ['_assets', './src/assets'],
          ['_components', './src/components'],
          ['_features', './src/features'],
          ['_hooks', './src/hooks'],
          ['_localization', './src/localization'],
          ['_navigation', './src/navigation'],
          ['_theme', './src/theme'],
        ],
        extensions: ['.android.js', '.ios.js', '.js', '.jsx', '.json'],
      },
    },
  },
};

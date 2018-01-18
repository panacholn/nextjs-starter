module.exports = {
  "extends": "airbnb",
  "rules": {
    "semi": ["error", "never"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "jsx-a11y/href-no-hash": 0,
    "no-underscore-dangle": 0,
  },
  "env": {
    "browser": true,
    "jest": true,
  }
};
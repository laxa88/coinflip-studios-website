module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  // parser: "babel-eslint",
  "rules": {
    // "semi": ["error", "always"],
    // "quotes": ["error", "double"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }] // allows js files to use jsx syntax
  },
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "document": false
  }
};
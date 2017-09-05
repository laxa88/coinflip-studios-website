// https://eslint.org/docs/user-guide/configuring
// Rules: 0 = "none", 1 = "warn", 2 = "error"
module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  // parser: "babel-eslint",
  "rules": {
    // "semi": ["error", "always"],
    // "quotes": ["error", "double"],
    // "max-len": [1, 80],
    "linebreak-style": ["error", "windows"],
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
module.exports = [
  {
    files: ["**/db/**/*.js", "**/test/**/*.js"],
    rules: {
      "max-lines": ["error", { "max": 200, "skipBlankLines": true, "skipComments": true }],
      "max-lines-per-function": "off",
      "max-statements": ["error", 20]
    }
  },
  {
    files: ["**/entities/**/*.js"],
    rules: {
      "max-lines": ["error", { "max": 150, "skipBlankLines": true, "skipComments": true }]
    }
  },
  {
    files: ["**/commands/**/*.js"],
    rules: {
      "max-lines-per-function": ["error", { "max": 30, "skipBlankLines": true, "skipComments": true }]
    }
  }
]

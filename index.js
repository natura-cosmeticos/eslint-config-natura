const rules = require('./src/rules');
const overrides = require('./src/overrides');
const mocharules = require('./src/mocha/rules');

module.exports = {
  extends: ['airbnb-base'],
  plugins: ['mocha'],
  rules: Object.assign(rules, mocharules),
  overrides,
};

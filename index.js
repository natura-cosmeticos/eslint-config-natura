const rules = require('./src/rules');
const overrides = require('./src/overrides');

module.exports = {
  extends: ['airbnb-base'],
  rules,
  overrides,
};

const bestPractices = {
  'class-methods-use-this': 'off',
  complexity: ['error', 5],
  'max-classes-per-file': ['error', 3],
  'require-await': 'error',
};

const node = {
  'no-mixed-requires': ['error', { allowCall: true, grouping: true }],
};

const style = {
  'id-blacklist': ['error', 'erro', 'erros'],
  'id-length': ['error', { exceptions: ['_'] }],
  'max-depth': ['error', 4],
  'max-lines': ['error', { max: 100, skipBlankLines: true, skipComments: true }],
  'max-lines-per-function': ['error', { max: 15, skipBlankLines: true, skipComments: true }],
  'max-nested-callbacks': ['error', 4],
  'max-params': ['error', 4],
  'max-statements': 'error',
  'max-statements-per-line': 'error',
  'padding-line-between-statements': ['error',
    { blankLine: "always", prev: ["const", "let"], next: "*"},
    { blankLine: "always", prev: "*", next: "return" },
    { blankLine: "any", prev: ["const", "let"], next: ["const", "let"]},
  ],
  'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
};

const es6 = {
  'no-duplicate-imports': 'error',
};

const rules = Object.assign(bestPractices, es6, node, style);

module.exports = rules;

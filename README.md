# Natura ESLint Configuration
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/eslint-config-natura/badge.svg)](https://snyk.io/test/github/natura-cosmeticos/eslint-config-natura)

## What for

[ESLint](https://eslint.org/) rules to achieve better code, using Airbnb styles rules.

The Natura ESLint configuration extends the
[Airbnb](https://github.com/airbnb/javascript) configuration. While Airbnb
provides a decent style configuration it does not use all the available rules to
help enhance code quality like the following ones among others:

- [max-depth](https://eslint.org/docs/rules/max-depth)
- [max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function)
- [complexity](https://eslint.org/docs/rules/complexity)

### Why a new eslint-config?

This project helps achieve the `good maintainability` need, offering a default lint for all Node.js projects.

## How to use

To use this configuration install the package on your project using either npm or yarn:

```bash
npm i --save-dev '@naturacosmeticos/eslint-config-natura'

yarn add -D '@naturacosmeticos/eslint-config-natura'
```

Add `@naturacosmeticos/natura` to the eslint `extends` option in the `.eslintrc` file:

```
{
  "env": {
    "es6": true,
    "mocha": true,
    "node": true
  },
  "extends": ["@naturacosmeticos/natura"],
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src", "test"]
      }
    }
  }
}
```

Airbnb-base is already included, no need to add it.

## How to contribute

You can contribute submitting [pull requests](https://github.com/natura-cosmeticos/eslint-config-natura/pulls).

### Setup

Run `yarn` or if your use npm `npm i`.

/**
 * Mocha Rules (eslint-plugin-mocha package)
 *
 * handle-done-callback: Enforces handling of callbacks for async tests (handle-done-callback),
 * max-top-level-suites: This rule enforces having a limited amount of top-level suites in a file,
 * no-exclusive-tests: This rule reminds you to remove .only from your tests,
 * no-global-tests: Prevent running tests outside the tests suites,
 * no-hooks: This rule looks for every call to before, after, beforeEach and afterEach,
 * no-identical-title: Prevent repeat titles in test suites and test cases,
 * no-mocha-arrows: Prevent using arrow functions as arguments to mocha global methods (describe, it),
 * no-nested-tests: This rule reports nested test cases in order to prevent them of being skipped silently,
 * no-pending-tests: Remembers the devs that are tests pending of completion,
 * no-return-and-callback: Disallow returning in a test or hook function that uses a callback,
 * no-setup-in-describe: This rule looks for all function calls and use of the dot operator which are nested directly in a describe block,
 * no-skipped-tests: This rule looks for all skipped tests,
 * prefer-arrow-callback: This rule is a variation of the core eslint
 *      prefer-arrow-callback rule that is mocha-aware and does not flag non-arrow callbacks within mocha functions,
 * no-async-describe: This rule disallows the use of an async function with describe. It usually indicates a copy/paste
 *      error or that you're trying to use describe for setup code, which should happen in before or beforeEach.
 *      Also, it can lead to the contained it blocks not being picked up.
 **/
const rules = {
    "mocha/handle-done-callback": "error",
    "mocha/max-top-level-suites": "error",
    "mocha/no-exclusive-tests": "error",
    "mocha/no-global-tests": "error",
    "mocha/no-hooks": "error",
    "mocha/no-identical-title": "error",
    "mocha/no-mocha-arrows": "error",
    "mocha/no-nested-tests": "error",
    "mocha/no-pending-tests": "warning",
    "mocha/no-return-and-callback": "error",
    "mocha/no-setup-in-describe": "error",
    "mocha/no-skipped-tests": "error",
    "mocha/prefer-arrow-callback": "error",
    "mocha/no-async-describe": "error",
};

module.exports = rules;
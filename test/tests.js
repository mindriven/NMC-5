const _lib = require('./../app/lib');
const assert = require('assert');
const tests = {};
tests['isPalidrome does not throw when empty param given'] = () => _lib.isPalidrome(undefined);
tests['isPalidrome does not throw when object param given'] = () => _lib.isPalidrome({'asdas': []});
tests['isPalidrome returns true for "aba"'] = () => assert.equal(_lib.isPalidrome("aba"), true);
tests['isPalidrome returns true for "kayak"'] = () => assert.equal(_lib.isPalidrome("kayak"), true);
tests['isPalidrome returns false for "notAPalindrome"'] = () => assert.equal(_lib.isPalidrome("notAPalindrome"), false);

tests['ensureValue throws if null'] = () => assert.throws(() => _lib.ensureValue(null));
tests['ensureValue throws if undefined'] = () => assert.throws(() => _lib.ensureValue(undefined));
tests['ensureValue does not throws if false'] = () => assert.doesNotThrow(() => _lib.ensureValue(false));
tests['ensureValue does not throws if empty string'] = () => assert.doesNotThrow(() => _lib.ensureValue(''));
tests['ensureValue does not throws if empty object'] = () => assert.doesNotThrow(() => _lib.ensureValue({}));
tests['ensureValue does not throws if object'] = () => assert.doesNotThrow(() => _lib.ensureValue({name: 'abc'}));
module.exports = tests;
const lib = {};

lib.isPalidrome = (word) =>
    typeof word !== 'string'
        ? false
        : word.split('').reverse().join('') === word;


lib.ensureValue = (input) => {
    if (input === null || input === undefined) throw new Error('expected value, but found ' + input);
    return input;
}

module.exports = lib;
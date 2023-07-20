const _ = require('lodash');

function greet(name) {
    return `Hello, ${name}!`;
}

function multiply(a, b) {
    return a * b;
}

function squareRoot(number) {
    return _.round(Math.sqrt(number), 2);
}

module.exports = {
    greet,
    multiply,
    squareRoot
};

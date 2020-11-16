const { ADD, SUBTRACT, MULTIPLY, DIVIDE } = require('./constants');

const add = (a) => (b) => a + b;
const subtract = (a) => (b) => a - b;
const multiply = (a) => (b) => a * b;
const divide = (a) => (b) => a / b;

const OPERATIONS = new Map([
  [ADD, add],
  [SUBTRACT, subtract],
  [MULTIPLY, multiply],
  [DIVIDE, divide],
]);

module.exports = {
  OPERATIONS,
};

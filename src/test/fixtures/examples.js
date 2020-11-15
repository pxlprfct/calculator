const APPLY = `apply 3`;

const ADD = `add 2
apply 3`;

const SUBTRACT = `subtract 2
apply 3`;

const MULTIPLY = `multiply 2
apply 3`;

const DIVIDE = `divide 2
apply 3`;

const EXAMPLE_1 = `add 2
multiply 3
apply 3`;

const EXAMPLE_2 = `multiply 9
apply 5`;

const INVALID_OPERATOR = `invalid 2
apply 3`;

module.exports = {
  APPLY,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  EXAMPLE_1,
  EXAMPLE_2,
  INVALID_OPERATOR,
};

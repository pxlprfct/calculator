const {
  APPLY,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  ERROR_MISSING_APPLY,
} = require('./constants');
const { formatInstructions } = require('./formatInstructions');

const getInitialValue = (instructions) => {
  try {
    const lastInstruction = instructions.pop();

    if (lastInstruction[0] !== APPLY) {
      throw Error();
    }

    return lastInstruction[1];
  } catch (error) {
    throw Error(ERROR_MISSING_APPLY);
  }
};

const calculate = (input) => {
  const instructions = formatInstructions(input);

  const initialValue = getInitialValue(instructions);

  const result = instructions.reduce((acc, current) => {
    const [operator, value] = current;

    if (operator === ADD) {
      acc += value;
    }

    if (operator === SUBTRACT) {
      acc -= value;
    }

    if (operator === MULTIPLY) {
      acc *= value;
    }

    if (operator === DIVIDE) {
      acc /= value;
    }
    return acc;
  }, initialValue);

  return result;
};

module.exports = {
  calculate,
};

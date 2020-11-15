const {
  APPLY,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  ERROR_MISSING_APPLY,
} = require('./constants');
const { formatInstructions } = require('./formatInstructions');
const { add, subtract, multiply, divide } = require('./operations');

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

const runOperations = (result, instruction) => {
  const [operation, value] = instruction;

  switch (operation) {
    case ADD:
      return add(result, value);
    case SUBTRACT:
      return subtract(result, value);
    case DIVIDE:
      return divide(result, value);
    case MULTIPLY:
      return multiply(result, value);
    default:
      return result;
  }
};

const calculate = (input) => {
  const instructions = formatInstructions(input);
  const initialValue = getInitialValue(instructions);

  return instructions.reduce(
    (result, instruction) => runOperations(result, instruction),
    initialValue,
  );
};

module.exports = {
  calculate,
};

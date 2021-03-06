const { APPLY, ERROR_MISSING_APPLY } = require('./constants');
const { OPERATIONS } = require('./operations');
const { formatInstructions } = require('./formatInstructions');

const getInitialValue = (instructions) => {
  const [operation, value] = instructions.pop();

  if (operation !== APPLY) {
    throw Error(ERROR_MISSING_APPLY);
  }

  return value;
};

const runOperations = (total, instruction) => {
  const [operation, value] = instruction;
  const func = OPERATIONS.get(operation);

  return func ? func(total)(value) : total;
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

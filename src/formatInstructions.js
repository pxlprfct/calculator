const removeEmptyInstructions = (instructions) => Boolean(instructions);

const splitInstructions = (instruction) => instruction.trim().split(' ');

const formatInstruction = (instruction) => {
  const [operation, value] = instruction;
  return [operation, Number(value)];
};

const formatInstructions = (instructions) =>
  instructions
    .split('\n')
    .filter(removeEmptyInstructions)
    .map(splitInstructions)
    .map(formatInstruction);

module.exports = { formatInstructions };

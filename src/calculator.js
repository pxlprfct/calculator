const getInitialValue = (instructions) => {
  try {
    const lastInstruction = instructions.pop();

    if (lastInstruction[0] !== 'apply') {
      throw Error();
    }

    return lastInstruction[1];
  } catch (error) {
    throw Error(
      'The last line of a list of a instructions needs to be "apply" and then a value',
    );
  }
};

const calculate = (input) => {
  const instructions = input
    .split('\n')
    .filter((instruction) => Boolean(instruction))
    .map((instruction) => instruction.trim().split(' '))
    .map((instruction) => {
      const [operation, value] = instruction;
      return [operation, Number(value)];
    });

  const initialValue = getInitialValue(instructions);

  const result = instructions.reduce((acc, current) => {
    const [operator, value] = current;

    if (operator === 'add') {
      acc += value;
    }

    if (operator === 'subtract') {
      acc -= value;
    }

    if (operator === 'multiply') {
      acc *= value;
    }

    if (operator === 'divide') {
      acc /= value;
    }
    return acc;
  }, initialValue);

  return result;
};

module.exports = {
  calculate,
};

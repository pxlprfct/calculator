const calculate = (input) => {
  const instructions = input
    .split('\n')
    .filter((instruction) => Boolean(instruction))
    .map((instruction) => instruction.trim().split(' '))
    .map((instruction) => {
      const [operation, value] = instruction;
      return [operation, Number(value)];
    });

  const lastLine = instructions.pop();

  if (lastLine[0] !== 'apply') {
    throw Error(
      'The last line of a list of a instructions needs to be "apply" and then a value',
    );
  }

  const initialValue = lastLine[1];

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

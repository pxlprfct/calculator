const calculate = (input) => {
  const instructions = input
    .split('\n')
    .map((instruction) => instruction.trim().split(' '))
    .map((instruction) => {
      const [operation, value] = instruction;
      return [operation, Number(value)];
    });

  const apply = instructions.pop()[1];

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
    return acc;
  }, apply);

  return result;
};

module.exports = {
  calculate,
};

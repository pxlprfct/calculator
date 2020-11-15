const calculate = (input) => {
  const instructions = input.split(' ');
  const [operator, number] = instructions;

  return Number(number);
};

module.exports = {
  calculate,
};

const { calculate } = require('./calculator');

const renderCalculation = (input) => {
  const result = calculate(input);
  console.log(result);
  return result;
};

module.exports = { renderCalculation };

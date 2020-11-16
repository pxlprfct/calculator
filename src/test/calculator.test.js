const { calculate } = require('../calculator');
const {
  APPLY,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  EXAMPLE_1,
  EXAMPLE_2,
  INVALID_OPERATOR,
} = require('./fixtures/examples');

describe('a calculator takes in a list instructions and returns a result', () => {
  describe('each instruction is comprised of a keyword (called an operator) and a number', () => {
    it(`the 'apply' operator returns the initial value`, () => {
      expect(calculate(APPLY)).toBe(3);
    });

    describe(`all other instructions are performed on the initial value`, () => {
      it(`the 'add' operator adds to the initial value`, () => {
        expect(calculate(ADD)).toBe(5);
      });

      it(`the 'subtract' operator subtracts from the initial value`, () => {
        expect(calculate(SUBTRACT)).toBe(1);
      });

      it(`the 'multiply' operator multiplies the initial value`, () => {
        expect(calculate(MULTIPLY)).toBe(6);
      });

      it(`the 'divide' operator divides the initial value`, () => {
        expect(calculate(DIVIDE)).toBe(1.5);
      });
    });
  });

  describe('the calculator can be passed multiple instructions', () => {
    it(`adding and multiplying (Example 1)`, () => {
      expect(calculate(EXAMPLE_1)).toBe(15);
    });

    it(`multiplying (Example 2)`, () => {
      expect(calculate(EXAMPLE_2)).toBe(45);
    });
  });
});

describe('guards and errors', () => {
  it(`if the last line of the list of instructions isn't the 'apply' operator - throw`, () => {
    const ERROR_MESSAGE =
      'The last line of a list of a instructions needs to be "apply" and then a value';
    expect(() => calculate(`add 2`)).toThrowError(ERROR_MESSAGE);
  });

  it(`when the calculator is passed an invalid or unknown operator, it should ignore it`, () => {
    expect(calculate(INVALID_OPERATOR)).toBe(3);
  });
});

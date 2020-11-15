const { calculate } = require('../calculator');
const {
  APPLY,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  EXAMPLE_1,
  EXAMPLE_2,
} = require('./fixtures/examples');

describe('a calculator takes in instructions, and returns a result', () => {
  describe('each instruction is comprised of a keyword (called an operator) and a number', () => {
    it(`the 'apply' operator is the initialised value`, () => {
      expect(calculate(APPLY)).toBe(3);
    });

    describe(`all other instructions are used on the initial value`, () => {
      it(`the 'add' operator adds to the initialised value`, () => {
        expect(calculate(ADD)).toBe(5);
      });

      it(`the 'subtract' operator subtracts from the initialised value`, () => {
        expect(calculate(SUBTRACT)).toBe(1);
      });

      it(`the 'multiply' operator multiplies from the initialised value`, () => {
        expect(calculate(MULTIPLY)).toBe(6);
      });

      it(`the 'divide' operator multiplies from the initialised value`, () => {
        expect(calculate(DIVIDE)).toBe(1.5);
      });
    });
  });

  describe('the calculator can be passed multiple instructions', () => {
    test(`adding and multiplying (Example 1)`, () => {
      expect(calculate(EXAMPLE_1)).toBe(15);
    });

    test(`multiplying (Example 2)`, () => {
      expect(calculate(EXAMPLE_2)).toBe(45);
    });
  });
});

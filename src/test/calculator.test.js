const { calculate } = require('../calculator');

describe('a calculator takes in instructions, and returns a result', () => {
  describe('each instruction is comprised of a keyword (called an operator) and a number', () => {
    it(`the 'apply' operator is the initialised value`, () => {
      const INSTRUCTION = `apply 3`;

      expect(calculate(INSTRUCTION)).toBe(3);
    });

    describe(`all other instructions are used on the initial value`, () => {
      it(`the 'add' operator adds to the initialised value`, () => {
        const INSTRUCTION = `add 2
          apply 3`;

        expect(calculate(INSTRUCTION)).toBe(5);
      });

      it(`the 'subtract' operator subtracts from the initialised value`, () => {
        const INSTRUCTION = `subtract 2
        apply 3`;

        expect(calculate(INSTRUCTION)).toBe(1);
      });

      it(`the 'multiply' operator multiplies from the initialised value`, () => {
        const INSTRUCTION = `multiply 2
        apply 3`;

        expect(calculate(INSTRUCTION)).toBe(6);
      });

      it(`the 'divide' operator multiplies from the initialised value`, () => {
        const INSTRUCTION = `divide 2
        apply 3`;

        expect(calculate(INSTRUCTION)).toBe(1.5);
      });
    });
  });

  describe('the calculator can be passed multiple instructions', () => {
    test(`adding and multiplying (Example 1)`, () => {
      const INSTRUCTION = `add 2
          multiply 3
          apply 3`;

      expect(calculate(INSTRUCTION)).toBe(15);
    });

    test(`multiplying (Example 2)`, () => {
      const INSTRUCTION = `multiply 9
          apply 5`;

      expect(calculate(INSTRUCTION)).toBe(45);
    });
  });
});

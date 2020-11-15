const { calculate } = require('../index');

describe('a calculator takes in a set of instructions, and returns a result', () => {
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
    });
  });
});

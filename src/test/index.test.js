const fs = require('fs');
const { renderCalculation } = require('../index');

const mockConsole = jest.spyOn(global.console, 'log');

it('the application should load instructions from a file, calculate the result, and then print it to the console', async () => {
  const INSTRUCTIONS = await fs.readFileSync(
    'src/test/fixtures/example.txt',
    'utf8',
  );

  expect(renderCalculation(INSTRUCTIONS)).toBe(5);
  expect(mockConsole.mock.calls[0][0]).toBe(5);
});

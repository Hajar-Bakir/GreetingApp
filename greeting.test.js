const { calculateBMI } = require('./GREETING-APP/main.js');

test('Hello World', () => {
  expect(calculateBMI(70, 175)).toBe(23);
  expect(calculateBMI(85, 190)).toBe(24);
  expect(calculateBMI(65, 160)).toBe(25);
});
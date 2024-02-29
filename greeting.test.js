// greeting.test.js
const greeting = require('./greeting');

test('Greeting returns correct message', () => {
  expect(greeting()).toBe('Hello, World!');
});

const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('divide 6 / 0 to equal Infinitity', () => {
  expect(calculator.divide(5, 0)).toBe(Infinity);
});

test('divide 6 / 3 to equal 2', () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test('divide 7 / 5 to equal 1.4', () => {
  expect(calculator.divide(7, 5)).toBe(1.4);
});

test('divide 7 / 5 to equal 1.4', () => {
  expect(calculator.divide(7, 5)).toBe(1.4);
});

test('divide 7 / 5 to equal 1.4', () => {
  expect(calculator.divide(7, 5)).toBe(1.4);
});

test('multiply 7 * 5 to equal 0', () => {
  expect(calculator.multiply(7, 0)).toBe(0);
});

test('divide 20 / 254 to equal 1.4', () => {
  expect(calculator.multiply(20, 254)).toBe(5080);
});
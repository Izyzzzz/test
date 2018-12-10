const script = require('./script.js');
const num = script.num;
const sum = script.sum;
const each = script.each;

test('Yes', () => {
  expect(sum).toBeTruthy();
});

test('Yes', () => {
  expect(num).toEqual(5);
});

test('Yes', () => {
  expect(each).toEqual([ 8, 7, 6, 5, 4 ]);
});

test('Yes', () => {
  expect(each).toHaveLength(5);
});

test('Yes', () => {
  expect(Array.isArray(each)).toBe(true);
});
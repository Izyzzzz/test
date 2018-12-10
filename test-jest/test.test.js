const num = require('./test');
const sum = require('./test');
const each = require('./test');

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
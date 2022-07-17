const pathFile = process.argv;

test('this is path is string?', () => {
  expect(typeof pathFile).toBe('object');
});

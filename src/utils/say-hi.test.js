import { sayHi } from './say-hi';

test('sayHi', () => {
  expect(sayHi(1)).toBe('Hi!');

  expect(sayHi(2)).toBe('Hello');

  expect(sayHi(3)).toBe('Good evening!');

  expect(sayHi(4)).toBe('Have a good morning');

  expect(sayHi(5)).toBe('Hey!');

  expect(sayHi(6)).toBe('Bonjur');

  expect(sayHi(7)).toBe('Bless you!');
});

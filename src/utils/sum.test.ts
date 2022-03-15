import { sum } from './sum';

describe('Check sum function', () => {
  it('should return 4', () => {
    expect(sum(2, 2)).toEqual(4);
  });

  it('should return -42', () => {
    expect(sum(-54, 12)).toEqual(-42);
  });
});

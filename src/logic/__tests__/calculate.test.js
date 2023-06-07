import calculate from 'logic/calculate';

describe('Calculator Logic', () => {
  const initialParameter = { total: '10', next: '10', operation: '10' };

  test('AC should return all properties null', () => {
    expect(calculate(initialParameter, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});

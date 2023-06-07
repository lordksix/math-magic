import calculate from 'logic/calculate';

describe('Calculator Logic', () => {
  const initialParameter = { total: null, next: '10', operation: null };
  const nullObj = { total: null, next: null, operation: null };
  const zeroObj = { total: '0', next: '0', operation: null };

  describe('Number option is selected', () => {
    test('Initial value is null', () => {
      expect(calculate(nullObj, '0')).toEqual({ total: null, next: '0' });
    });

    test('Initial value is zero and zero is press', () => {
      expect(calculate(zeroObj, '0')).toEqual({});
    });

    test('Non zero previous value', () => {
      expect(calculate(initialParameter, '0')).toEqual({ total: null, next: '100' });
    });

    test('Decimal point is added', () => {
      expect(calculate(initialParameter, '.')).toEqual({ ...initialParameter, next: '10.' });
    });

    test('Decimal point is pressed but already exists', () => {
      expect(calculate(calculate(initialParameter, '.'), '.')).toEqual({ ...initialParameter, next: '10.' });
    });

    test('Decimal point is added to a non existing value', () => {
      expect(calculate(nullObj, '.')).toEqual({ ...nullObj, next: '0.' });
    });
  });

  test('AC should return all properties null', () => {
    expect(calculate(initialParameter, 'AC')).toEqual(nullObj);
  });
});

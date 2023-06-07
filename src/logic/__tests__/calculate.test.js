import calculate from 'logic/calculate';

describe('Calculator Logic', () => {
  const initialParameter = { total: null, next: '10', operation: null };
  const readyOp = { total: '10', next: '10', operation: '+' };
  const nullObj = { total: null, next: null, operation: null };
  const zeroObj = { total: '0', next: '0', operation: null };
  const zeroTotal = { total: '0', next: null, operation: null };
  const operation = '+';

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

  describe('Operation option is selected', () => {
    test('Initial value is null', () => {
      expect(calculate(nullObj, operation)).toEqual({ operation });
    });

    test('There is a initial value', () => {
      expect(calculate(initialParameter, operation)).toEqual({ total: '10', next: null, operation });
    });

    test('Total is zero and no initial value', () => {
      expect(calculate(zeroTotal, operation)).toEqual({ total: '0', next: null, operation });
    });

    test('Add one operation when one already exists', () => {
      expect(calculate(readyOp, operation)).toEqual({ total: '20', next: null, operation });
    });
  });

  test('AC should return all properties null', () => {
    expect(calculate(initialParameter, 'AC')).toEqual(nullObj);
  });

  test('Equal button is press whe all is ready', () => {
    expect(calculate(readyOp, '=')).toEqual({ total: '20', next: null, operation: null });
  });
});

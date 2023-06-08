import operate from 'logic/operate';

describe('Operate Logic', () => {
  const number1 = '5';
  const number2 = '6';
  const zero = '0';

  test('Sum', () => {
    expect(operate(number1, zero, '+')).toBe('5');
  });

  test('Substraction', () => {
    expect(operate(number2, number1, '-')).toBe('1');
  });

  test('Multiplication non zero', () => {
    expect(operate(number2, number1, 'x')).toBe('30');
  });

  test('Multiplication zero', () => {
    expect(operate(number1, zero, 'x')).toBe('0');
  });

  test('Division non zero divisor', () => {
    expect(operate(number2, number1, '÷')).toBe('1.2');
  });

  test('Division zero divident', () => {
    expect(operate(zero, number1, '÷')).toBe('0');
  });

  test('Multiplication zero divisor', () => {
    expect(operate(number1, zero, '÷')).toBe("Can't divide by 0.");
  });

  test('modulo non zero divisor', () => {
    expect(operate(number2, number1, '%')).toBe('1');
  });

  test('modulo zero divident', () => {
    expect(operate(zero, number1, '%')).toBe('0');
  });

  test('modulo zero divisor', () => {
    expect(operate(number1, zero, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('modulo zero divisor', () => {
    expect(operate(number1, zero, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('error message operation', () => {
    expect(() => operate(number1, zero, 'a')).toThrow("Unknown operation 'a'");
  });
});

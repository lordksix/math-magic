import { render, screen } from '@testing-library/react';
import KeyRow from '../KeyRow';
import KEYPAD from '../keypadButtons';

describe('should render key rows', () => {
  const calculation = { total: null, next: null, operation: null };
  const setCalculation = () => console.log('test');

  test('should render button 0', () => {
    render(
      <KeyRow buttons={KEYPAD} onClickSetCalculation={setCalculation} calculation={calculation} />,
    );
    const keyBtnElement = screen.getByText('0');

    expect(keyBtnElement).toBeInTheDocument();
  });

  test('should render 19 buttons', () => {
    render(
      <KeyRow buttons={KEYPAD} onClickSetCalculation={setCalculation} calculation={calculation} />,
    );
    const keyBtns = screen.getAllByRole('button');

    expect(keyBtns.length).toBe(19);
  });
});

import { render, screen } from '@testing-library/react';
import Keypad from '../Keypad';

describe('should render keypad', () => {
  const calculation = { total: null, next: null, operation: null };
  const setCalculation = () => console.log('test');

  test('should render button 0', () => {
    render(
      <Keypad onClickSetCalculation={setCalculation} calculation={calculation} />,
    );
    const keyBtnElement = screen.getByText('0');

    expect(keyBtnElement).toBeInTheDocument();
  });

  test('should render 19 buttons', () => {
    render(
      <Keypad onClickSetCalculation={setCalculation} calculation={calculation} />,
    );
    const keyBtns = screen.getAllByRole('button');

    expect(keyBtns.length).toBe(19);
  });
});

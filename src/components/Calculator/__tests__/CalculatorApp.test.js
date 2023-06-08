import { render, screen } from '@testing-library/react';
import CalculatorApp from '../CalculatorApp';

describe('should render calculator component', () => {
  test('should render button 1', () => {
    render(
      <CalculatorApp />,
    );
    const keyBtnElement = screen.getByText(/1/i);

    expect(keyBtnElement).toBeInTheDocument();
  });

  test('should render 19 buttons', () => {
    render(
      <CalculatorApp />,
    );
    const keyBtns = screen.getAllByRole('button');

    expect(keyBtns.length).toBe(19);
  });
});

import { render, screen } from '@testing-library/react';
import ResultScreen from '../ResultScreen';

describe('should render result scree', () => {
  test('should render 0', () => {
    const calculation = { total: null, next: null, operation: null };

    render(
      <ResultScreen totalScreen={calculation} />,
    );
    const keyBtnElement = screen.getByText(/0/i);

    expect(keyBtnElement).toBeInTheDocument();
  });

  test('should render 65', () => {
    const calculation = { total: null, next: '65', operation: null };

    render(
      <ResultScreen totalScreen={calculation} />,
    );
    const keyBtnElement = screen.getByText(/65/i);

    expect(keyBtnElement).toBeInTheDocument();
  });

  test('should render 120', () => {
    const calculation = { total: '120', next: null, operation: null };

    render(
      <ResultScreen totalScreen={calculation} />,
    );
    const keyBtnElement = screen.getByText(/120/i);

    expect(keyBtnElement).toBeInTheDocument();
  });
});

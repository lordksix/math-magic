import { render, screen } from '@testing-library/react';
import KeyBtn from '../KeyBtn';

describe('should render key button', () => {
  const button = {
    category: 'number', value: '0', row: 5, id: 0,
  };

  const calculation = { total: null, next: null, operation: null };
  const setCalculation = () => console.log('test');

  test('should render button 0', () => {
    render(
      <KeyBtn button={button} onClickSetCalculation={setCalculation} calculation={calculation} />,
    );
    const keyBtnElement = screen.getByText(/0/i);

    expect(keyBtnElement).toBeInTheDocument();
  });
});

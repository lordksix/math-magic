import { render, screen } from '@testing-library/react';
import Calculator from 'routes/Calculator';

test('Should render heading', async () => {
  render(<Calculator />);
  const headingElement = screen.getByText(/some Math/i);
  expect(headingElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Calculator from 'routes/Calculator';

test('Should render Calculator heading', async () => {
  render(<Calculator />);
  const headingElement = screen.getByRole('heading', { name: /some Math/i });

  expect(headingElement).toBeInTheDocument();
});

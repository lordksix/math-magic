import { render, screen } from '@testing-library/react';
import Home from 'routes/Home';

test('Should render heading', async () => {
  render(<Home />);
  const headingElement = screen.getByRole('heading', { name: 'Welcome to our page' });

  expect(headingElement).toBeInTheDocument();
});

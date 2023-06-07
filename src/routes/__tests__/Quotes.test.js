import { render, screen } from '@testing-library/react';
import Quotes from 'routes/Quotes';

test('Should render Quotes heading', async () => {
  render(<Quotes />);
  const headingElement = screen.getByRole('heading', { name: /quotes/i });

  expect(headingElement).toBeInTheDocument();
});

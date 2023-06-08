import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Quotes from 'routes/Quotes';

test('Should render Quotes heading', async () => {
  act(() => {
    render(<Quotes />);
  });
  const headingElement = screen.getByRole('heading', { name: /quotes/i });

  expect(headingElement).toBeInTheDocument();
});

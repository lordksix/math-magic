import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import QuotesApp from '../QuotesApp';

test('should render Quotes App', async () => {
  render(<QuotesApp />);
  await waitFor(() => expect(screen.getByText(/by/i)).toBeInTheDocument(), { timeout: 2000 });
  screen.debug();
});

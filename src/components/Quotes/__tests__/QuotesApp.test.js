import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import QuotesApp from '../QuotesApp';

test('should render Quotes App', async () => {
  render(<QuotesApp />);
  screen.debug();
  await waitFor(() => expect(screen.getByText(/by/i)).toBeInTheDocument(), { timeout: 3000 });
});

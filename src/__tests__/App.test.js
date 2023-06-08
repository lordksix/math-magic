import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/calculator/i));
  expect(screen.getByText(/Let/i)).toBeInTheDocument();
});

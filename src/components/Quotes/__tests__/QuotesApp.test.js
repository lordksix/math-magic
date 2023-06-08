import { render, screen, waitFor } from '@testing-library/react';
import server from 'mocks/server';
import QuotesApp from '../QuotesApp';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('should render Quotes App', async () => {
  await render(<QuotesApp />);
  await waitFor(() => expect(screen.getAllByText(/by/i).length).toBe(3));
});

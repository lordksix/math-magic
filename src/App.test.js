import { render, screen } from '@testing-library/react';
import Navbar from 'components/Navbar';

test('renders header', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Math/i);
  expect(linkElement).toBeInTheDocument();
});

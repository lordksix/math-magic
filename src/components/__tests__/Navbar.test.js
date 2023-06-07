import { render, screen } from '@testing-library/react';
import Navbar from 'components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('should render Navbar Correctly', () => {
  const MockNavbar = () => (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  test('should render home option', () => {
    render(<MockNavbar />);
    const navLinkElement = screen.getByText(/home/i);

    expect(navLinkElement).toBeInTheDocument();
  });

  test('should render home option', () => {
    render(<MockNavbar />);
    const navLinkElement = screen.getByText(/quotes/i);

    expect(navLinkElement).toBeInTheDocument();
  });

  test('should render home option', () => {
    render(<MockNavbar />);
    const navLinkElement = screen.getByText(/calculator/i);

    expect(navLinkElement).toBeInTheDocument();
  });
});

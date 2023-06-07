import { render, screen } from '@testing-library/react';
import SingleQuote from '../SingleQuote';

describe('should render Quote correctly', () => {
  const itemKey = '1';
  const itemQuote = 'Once';
  const itemAuthor = 'Sophie';

  test('should render author', () => {
    render(<SingleQuote itemKey={itemKey} itemQuote={itemQuote} itemAuthor={itemAuthor} />);
    const headingElement = screen.getByText(/Sophie/i);

    expect(headingElement).toBeInTheDocument();
  });

  test('should render quote', () => {
    render(<SingleQuote itemKey={itemKey} itemQuote={itemQuote} itemAuthor={itemAuthor} />);
    const headingElement = screen.getByText(/Once/i);

    expect(headingElement).toBeInTheDocument();
  });

  test('should render one quote', () => {
    render(<SingleQuote itemKey={itemKey} itemQuote={itemQuote} itemAuthor={itemAuthor} />);
    const headingElement = screen.getAllByText(/Once/i);

    expect(headingElement.length).toBe(1);
  });
});

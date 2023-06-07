import { render, screen } from '@testing-library/react';
import QuoteList from '../QuoteList';

describe('should render Quote correctly', () => {
  const item1 = { category: 'catcat', quote: 'Once', author: 'Sophie' };
  const item2 = { category: 'catcat', quote: 'Twice', author: 'Sophie' };
  const item3 = { category: 'catcat', quote: 'Thrice', author: 'Sophie' };

  const data = [item1, item2, item3];

  test('should render quote', () => {
    render(<QuoteList data={data} />);
    const headingElement = screen.getByText(/Once/i);

    expect(headingElement).toBeInTheDocument();
  });

  test('should render quote', () => {
    render(<QuoteList data={data} />);
    const headingElement = screen.getByText(/Twice/i);

    expect(headingElement).toBeInTheDocument();
  });

  test('should render three quote', () => {
    render(<QuoteList data={data} />);
    const headingElement = screen.getAllByText(/Sophie/i);

    expect(headingElement.length).toBe(3);
  });
});

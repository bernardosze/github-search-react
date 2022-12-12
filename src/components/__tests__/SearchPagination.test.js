import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPagination from '../SearchPagination';

describe('SearchPagination', () => {
  it('renders the SearchPagination component', async () => {
    render(<SearchPagination />);
    expect(await screen.getByText(/Showing page/i)).toBeInTheDocument();
  });

  it('renders the SearchPagination component with 5 pages', async () => {
    render(<SearchPagination totalCount={120} />);
    expect(await screen.getByText('5')).toBeInTheDocument();
  });
});

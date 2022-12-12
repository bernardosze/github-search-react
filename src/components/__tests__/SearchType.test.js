import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchType from '../SearchType';

describe('SearchType', () => {
  it('renders the SearchType component', () => {
    render(<SearchType />);
    expect(screen.getByLabelText(/search type/i)).toBeInTheDocument();
  });
});

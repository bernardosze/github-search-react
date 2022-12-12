import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchError from '../SearchError';

describe('SearchError', () => {
  it('renders the SearchError component', () => {
    render(<SearchError />);
    expect(screen.getByText('An error ocorred.')).toBeInTheDocument();
  });
});

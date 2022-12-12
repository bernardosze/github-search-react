import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchIncomplete from '../SearchIncomplete';

describe('SearchIncomplete', () => {
  it('renders the SearchIncomplete component', () => {
    render(<SearchIncomplete />);
    expect(
      screen.getByText('Cannot process your search as typed.')
    ).toBeInTheDocument();
  });
});

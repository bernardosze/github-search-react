import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchItem from '../SearchItem';

const item = {
  login: 'bernardosze',
  avatar_url: 'https://image.com/bernardosze',
  html_url: 'https://github.com/bernardosze',
};

describe('SearchItem', () => {
  it('renders the SearchItem component', () => {
    render(<SearchItem item={item} />);
    expect(screen.getByAltText('bernardosze')).toBeInTheDocument();
  });

  it('renders the username as an anchor tag', () => {
    render(<SearchItem item={item} />);
    expect(screen.getByText('bernardosze')).toHaveAttribute(
      'href',
      item.html_url
    );
  });
});

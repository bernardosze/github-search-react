import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchList from '../SearchList';

const items = [
  {
    id: 1,
    login: 'janedoe',
    avatar_url: 'https://image.com/janedoe',
    html_url: 'https://github.com/janedoe',
  },
  {
    id: 2,
    login: 'johndoe',
    avatar_url: 'https://image.com/johndoe',
    html_url: 'https://github.com/johndoe',
  },
];

describe('SearchList', () => {
  it('does not render the SearchList component if list is empty', () => {
    const { container } = render(<SearchList />);
    expect(container.firstChild).toBeNull();
  });

  it('render the SearchList component with 2 items', async () => {
    render(<SearchList items={items} type="user" totalCount={2} page={1} />);
    expect(await screen.getAllByRole('img')).toHaveLength(2);
  });
});

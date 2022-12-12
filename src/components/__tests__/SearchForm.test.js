import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from '../SearchForm';

describe('SearchForm', () => {
  it('renders the SearchForm component', () => {
    render(<SearchForm />);
    expect(screen.getByText('Search:')).toBeInTheDocument();
  });

  it('calls onSubmit prop on button click', () => {
    const onSubmit = jest.fn();
    render(<SearchForm onSubmit={onSubmit} />);
    fireEvent.submit(screen.getByRole('button'));
    expect(onSubmit).toHaveBeenCalled();
  });
});

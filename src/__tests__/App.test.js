import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  it('renders the main tag', async () => {
    render(<App />);
    expect(await screen.findByRole('main')).toBeInTheDocument();
  });
});

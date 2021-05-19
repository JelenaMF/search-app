import { render, screen } from '@testing-library/react';
import App from './App';

test('Search App', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Search App/i);
  expect(linkElement).toBeInTheDocument();
});

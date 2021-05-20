import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search App/i);
  expect(linkElement).toBeInTheDocument();
});


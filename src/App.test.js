//ANA LUIZA LOPES PENNA-2023000060
//WALQUIRIA MAFADO-2022009098
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

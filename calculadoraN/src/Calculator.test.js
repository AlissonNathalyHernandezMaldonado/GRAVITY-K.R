import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('suma dos números correctamente', () => {
  render(<Calculator />);
  fireEvent.change(screen.getByPlaceholderText('Número 1'), { target: { value: '5' } });
  fireEvent.change(screen.getByPlaceholderText('Número 2'), { target: { value: '3' } });
  fireEvent.click(screen.getByText('Sumar'));
  expect(screen.getByText(/Resultado:/)).toHaveTextContent('Resultado: 8');
});

test('divide entre cero muestra error', () => {
  render(<Calculator />);
  fireEvent.change(screen.getByPlaceholderText('Número 1'), { target: { value: '10' } });
  fireEvent.change(screen.getByPlaceholderText('Número 2'), { target: { value: '0' } });
  fireEvent.click(screen.getByText('Dividir'));
  expect(screen.getByText(/Resultado:/)).toHaveTextContent('Error: División por 0');
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Competition from './index';

const name = 'competição 1';
const country = 'Brazil';
const description = 'descricao competição muito legal';

test('Componente recebe um card com nome da competição, descriçao e pais', () => {
  render(<Competition name={name} country={country} description={description} />);

  const text1 = screen.getByText(name);
  const text2 = screen.getByText(country);
  const text3 = screen.getByText(description);

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(text3).toBeInTheDocument();
});

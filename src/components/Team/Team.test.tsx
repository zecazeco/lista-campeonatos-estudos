import React from 'react';
import { render, screen } from '@testing-library/react';
import Team from './index';

const id = '22';
const name = 'Time 1';
const city = 'cidade';

test('Componente recebe um card com o time e sua cidade', () => {
  render(<Team id={id} name={name} city={city} />);

  const text1 = screen.getByText(name);
  const text2 = screen.getByText(city);

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Match from './index';

const date = '27/05/2022';
const competition = 'Copa do Brasil';
const home = 'time da casa';
const away = 'time visitante';

test('Componente recebe um card com data da partida, competição e nomes dos times', () => {
  render(<Match date={date} home={home} away={away} competition={competition} />);

  const text1 = screen.getByText(date);
  const text2 = screen.getByText(home);
  const text3 = screen.getByText(away);
  const text4 = screen.getByText(competition);

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(text3).toBeInTheDocument();
  expect(text4).toBeInTheDocument();
});

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes';

function App() {
  return (
    <BrowserRouter basename="/lista-campeonatos-estudos">
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

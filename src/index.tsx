import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Container maxWidth="sm">
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root'),
);

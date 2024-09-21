import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import theme from '@/styles/theme.js';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);

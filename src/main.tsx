import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import { GlobalStyle, Theme } from './global';

import Routes from './Routes'

ReactDOM
.createRoot(document.getElementById('root')!)
.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
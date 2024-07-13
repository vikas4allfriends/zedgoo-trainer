import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';
import SignIn from './Views/SignIn';

const theme = createTheme({
  palette: {
    success: {
      main: '#ff0000',
    },
    primary: {
      main: '#4ADBD1'
    },
    secondary: {
      main: '#FFFF'
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <>
          <Routes >
            <Route path="/" element={<SignIn />} />
          </Routes>
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;



import React from 'react';
import "./index.css";
import { createTheme, ThemeProvider } from '@mui/material';
import { Routes } from "./routes/routes";
import { useGetUserQuery } from './apis/users.api';
import { useAppDispatch } from './app/hooks';
import { useNavigate } from 'react-router';

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

function App() {
  const { data: user } = useGetUserQuery(undefined);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import '../../style.css';
import { createRoot } from 'react-dom/client';

import {Container, Box} from '@mui/material';

import MainHeader from '../../components/MainHeader.jsx';
import VehicleList from './vehicleList.jsx';

import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette:{
    mode: 'dark',
    paperButton: {
      main: '#ffffff33',
      contrastText: '##ffffffb3'
    }
  }
});

// Render your React component instead
const root = createRoot(document.getElementById('app'));

root.render(
<ThemeProvider theme={theme}>
  <Box sx={{ position:'absolute', left:'0', top:'0', width: '100vw', height: '100vh', backgroundColor:'#161616'}}>
    <MainHeader/>
    <VehicleList/>
  </Box>
</ThemeProvider>

);
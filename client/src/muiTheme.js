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


module.exports = {theme}
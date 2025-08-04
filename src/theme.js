import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#cce6f5ff',
    },
    secondary: {
      main: '#F7D6E0',
    },
    background: {
      default: '#f4f4f5ff',
      paper: '#ece7e7ff',
    },
    text: {
      primary: '#000',
      secondary: '#444',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;

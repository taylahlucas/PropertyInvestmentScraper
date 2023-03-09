import { createTheme } from '@mui/material'

const baseTheme = createTheme({
  palette: {
    background: {
        default: '#BCC6CA'
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: 250
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'lightGrey'
          }
        }
      }
    }
  }
});

export default baseTheme;
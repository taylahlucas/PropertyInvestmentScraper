import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import baseTheme from '../styles/mui_themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider {...pageProps} theme={baseTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

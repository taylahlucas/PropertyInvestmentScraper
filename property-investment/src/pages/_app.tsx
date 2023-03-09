import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import baseTheme from '../styles/mui_themes';

const monserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={monserrat.className}>
      <ThemeProvider {...pageProps} theme={baseTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
};

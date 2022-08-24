
import { useEffect, useState } from 'react';
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import theme from 'ui/themes/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [myTheme, setMyTheme] = useState(theme);
  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();

  }, []);


  return (
    <>
      <Head>
        <title>e-diarista</title>


      </Head >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  );
}

export default MyApp

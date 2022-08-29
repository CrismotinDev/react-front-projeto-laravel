
import { useEffect, useState } from 'react';
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import theme from 'ui/themes/theme';
import Header from 'ui/components/surfaces/Header/Header';
import Footer from 'ui/components/surfaces/Footer/Footer';
import { AppContainer } from '@styles/pages/_app.styled';

function MyApp({ Component, pageProps }: AppProps) {
  const [myTheme, setMyTheme] = useState(theme);
  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();

  }, []);


  return (
    <>
      <Head>
        <title>e-diarista {pageProps.title && ` - ${pageProps.title}`}</title>


      </Head >
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
        </AppContainer>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>

    </>
  );
}

export default MyApp

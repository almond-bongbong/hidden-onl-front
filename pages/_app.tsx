import React, { ReactElement } from 'react';
import NProgress from 'nprogress';
import { Router } from 'next/router';
import { ApolloProvider } from '@apollo/react-hooks';
import 'nprogress/nprogress.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../assets/styles/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { useApollo } from '../apollo/client';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Head>
          <title>오늘</title>
          <script
            src={`/js/kakao_map_sdk.js?appkey=${process.env.KAKAO_APP_KEY}`}
          />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

import React, { ReactElement } from 'react';
import * as nProgress from 'nprogress';
import { Router } from 'next/router';
import { ApolloProvider } from '@apollo/react-hooks';
import 'nprogress/nprogress.css';
import { AppProps } from 'next/app';
import { useApollo } from '../apollo/client';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

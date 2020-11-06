import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let apolloClient: ApolloClient<InMemoryCache>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
      credentials: 'same-origin',
    }),
  });
}

export function initializeApollo(initialState: { [key: string]: string } | null = null): ApolloClient<InMemoryCache> {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: { [key: string]: string } | null): ApolloClient<InMemoryCache> {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}

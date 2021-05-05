import NProgress from 'nprogress';
import Router from 'next/router';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';

import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/cartState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

interface Props extends AppProps {
  apollo: ApolloClient<unknown>;
}

function MyApp({ Component, pageProps, apollo }: Props) {
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CartStateProvider>
    </ApolloProvider>
  );
}

export default withData(MyApp);

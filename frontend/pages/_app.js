import { any, shape } from 'prop-types';

import Page from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
MyApp.propTypes = {
  Component: any,
  pageProps: shape(any),
};

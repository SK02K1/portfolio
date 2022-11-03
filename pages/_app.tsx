import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Footer, Layout, Navbar } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        <Head>
          <link
            rel='icon'
            href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>ॐ</text></svg>'
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </Layout>
  );
}

export default MyApp;

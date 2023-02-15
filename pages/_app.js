import Head from 'next/head';

import Layout from '../components/layout/layout';
import { NotificationContextProvider } from '../store/notification-context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#221f23' />
      </Head>
      <NotificationContextProvider>
        <Component {...pageProps} />
      </NotificationContextProvider>
    </Layout>
  );
}

export default MyApp;

import Layout from '../components/layout/layout';
import { NotificationContextProvider } from '../store/notification-context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NotificationContextProvider>
        <Component {...pageProps} />
      </NotificationContextProvider>
    </Layout>
  );
}

export default MyApp;

import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const footerName = router.pathname === '/hidden' ? 'Seung-Eun (Cathy) Lee' : 'Hank (Shin-hwan) Kim';

  return (
    <>
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
      </Head>
        <Component {...pageProps} />
        <footer className={styles.footer}>
            <p>&copy; 2026 {footerName}. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default MyApp;

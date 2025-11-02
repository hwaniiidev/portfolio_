import '../styles/globals.css';
import { Montserrat } from 'next/font/google';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
      </Head>
        <style jsx global>{`
            :root {
                --montserrat-font: ${montserrat.style.fontFamily};
            }
        `}</style>
        <Component {...pageProps} />
        <footer className={styles.footer}>
            <p>&copy; 2025 ShinHwan Kim. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default MyApp;

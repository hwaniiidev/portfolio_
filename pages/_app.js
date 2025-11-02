import '../styles/globals.css';
import { Montserrat } from 'next/font/google';
import styles from '../styles/Home.module.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
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

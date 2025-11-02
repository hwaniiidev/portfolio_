import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Custom404() {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', padding: '5rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className={styles.productLink}>
        Go back to the homepage
      </Link>
    </div>
  );
}

import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/hidden.module.css';

const HiddenPage = () => {
  const router = useRouter();

  const links = [
    { name: 'Resume', url: 'https://drive.google.com/file/d/14fbfLiYXCnpdUjSTpj-pSxA17gtP-8BZ/view?usp=sharing' },
    { name: 'Portfolio', url: 'https://drive.google.com/file/d/1xG-E2LFBXB3APperaGRWVDgR1tef6ZoZ/view?usp=drive_link' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/seung-eun-lee-42ab71337' },
    { name: 'Google Drive', url: 'https://drive.google.com/drive/folders/15gY8ZFMs3LShg9Lr6TAx06FzUbaoCn2h?usp=drive_link' },
  ];

  return (
    <div style={pageStyles.page}>
      <div className={styles.container}>
        <Head>
          <title>Seung-Eun Lee's Links</title>
        </Head>
        <h1 className={styles.username}>SeungEun Lee</h1>
        <div className={styles.linksContainer}>
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const pageStyles = {
  page: {
    backgroundColor: '#FAF0E6',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  },
};

export default HiddenPage;

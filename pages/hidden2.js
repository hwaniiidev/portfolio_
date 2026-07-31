import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/hidden2.module.css';

const HiddenPage2 = () => {
  const router = useRouter();

  const links = [
    { name: 'CV / Resume', url: 'https://drive.google.com/file/d/1b_4sdImx91EZPyARQHelUbXLV2b5Lc5s/view?usp=drive_link' },
    { name: 'Portfolio', url: 'https://www.hankkim.me/' },
    { name: 'GitHub', url: 'https://github.com/hwaniiidev' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hank-kim-174696380' },
  ];

  return (
    <div style={pageStyles.page}>
      <div className={styles.container}>
        <div className={styles.profileImageContainer}>
          <img src="/images/hidden2/profile_img.png" alt="Profile" className={styles.profileImage} />
        </div>
        <Head>
          <title>Hank Kim</title>
        </Head>
        <h1 className={`${styles.username} font-sf-pro`}>Hank (Shin-hwan) Kim</h1>

        <p className={`${styles.bio} font-sf-pro`}>
          Research Assistant (GRA) at East Texas A&M University<br/>
          Full Stack Engineer | Machine Learning Researcher<br/>
          Backend Optimization, AI-Driven Development
        </p>

        <div className={styles.linksContainer}>
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} font-sf-pro`}>
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

export default HiddenPage2;

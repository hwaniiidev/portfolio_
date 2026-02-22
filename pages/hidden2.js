import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/hidden2.module.css';

const HiddenPage2 = () => {
  const router = useRouter();

  const links = [
    { name: 'Resume', url: 'https://docs.google.com/document/d/1LA-dyPk-sr1CjnjueBinyjvzq_DAg3JjAfAZq2I-u9s/edit?tab=t.0' },
    { name: 'Portfolio', url: 'https://portfolio-omega-ten-19.vercel.app/' },
    { name: 'GitHub', url: 'https://github.com/hwaniiidev' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shin-hwan-kim-174696380/' },
  ];

  return (
    <div style={pageStyles.page}>
      <div className={styles.container}>
        <div className={styles.profileImageContainer}>
          <img src="/images/hidden2/profile_img.png" alt="Profile" className={styles.profileImage} />
        </div>
        <Head>
          <title>ShinHwan Kim's Links</title>
        </Head>
        <h1 className={`${styles.username} font-sf-pro`}>ShinHwan Kim</h1>

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

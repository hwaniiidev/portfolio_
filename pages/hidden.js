import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const HiddenPage = () => {
  const router = useRouter();

  const redirectToGoogleDrive = () => {
    router.push('https://drive.google.com/drive/folders/15gY8ZFMs3LShg9Lr6TAx06FzUbaoCn2h?usp=drive_link');
  };

  const redirectToLinkedIn = () => {
    router.push('https://www.linkedin.com/in/seung-eun-lee-42ab71337');
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>Seung-Eun Lee's Links</title>
      </Head>
      <img src="/images/profile.png" alt="Profile" style={styles.profileImage} />
      <h1 style={styles.username}>@seungeunlee</h1>
      <div style={styles.linksContainer}>
        <button style={styles.linkButton} onClick={redirectToGoogleDrive}>
          Google Drive
        </button>
        <button style={styles.linkButton} onClick={redirectToLinkedIn}>
          LinkedIn
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#fafafa',
    padding: '20px',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  username: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  linksContainer: {
    width: '100%',
    maxWidth: '680px',
  },
  linkButton: {
    display: 'block',
    width: '100%',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
  },
};

export default HiddenPage;
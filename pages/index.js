
import Head from 'next/head';
import { useState } from 'react';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const colors = {
    dark: {
      background: '#121212',
      text: '#FFFFFF',
      border: '#333',
    },
    light: {
      background: '#FFFFFF',
      text: '#121212',
      border: '#ddd',
    },
  };

  const currentTheme = isDarkMode ? colors.dark : colors.light;

  const styles = {
    container: {
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      minHeight: '100vh',
      padding: '0 2rem',
      transition: 'background-color 0.3s, color 0.3s',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 0',
    },
    header: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem 0',
      borderBottom: `1px solid ${currentTheme.border}`,
    },
    name: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: currentTheme.text,
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
    navLink: {
      color: currentTheme.text,
      textDecoration: 'none',
      fontSize: '1rem',
    },
    toggleButton: {
      background: 'none',
      border: `1px solid ${currentTheme.border}`,
      color: currentTheme.text,
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '0.9rem',
    },
    section: {
      width: '100%',
      maxWidth: '800px',
      padding: '4rem 0',
      borderBottom: `1px solid ${currentTheme.border}`,
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      color: currentTheme.text,
    },
    projectCard: {
      border: `1px solid ${currentTheme.border}`,
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
    },
    footer: {
      width: '100%',
      padding: '2rem 0',
      textAlign: 'center',
      borderTop: `1px solid ${currentTheme.border}`,
    },
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Minimalist Portfolio Page" />
      </Head>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      `}</style>

      <header style={styles.header}>
        <div style={styles.name}>My Name</div>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <button onClick={toggleDarkMode} style={styles.toggleButton}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

      <main style={styles.main}>
        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <p>
            Hello! I'm a passionate developer with a love for creating clean and efficient solutions. 
            This is a placeholder for a more detailed introduction.
          </p>
        </section>

        <section id="projects" style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>
          <div style={styles.projectCard}>
            <h3>Project One</h3>
            <p>A brief description of the first project. Highlighting the technologies used and the problems solved.</p>
          </div>
          <div style={styles.projectCard}>
            <h3>Project Two</h3>
            <p>A brief description of the second project. Highlighting the technologies used and the problems solved.</p>
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <p>
            You can reach me at <a href="mailto:email@example.com" style={{color: currentTheme.text}}>email@example.com</a>.
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 My Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

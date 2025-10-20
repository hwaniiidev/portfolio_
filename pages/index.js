import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticProps() {
  const projectsDirectory = path.join(process.cwd(), 'projects');
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ''),
      frontmatter: data,
    };
  });

  projects.sort((a, b) => {
    const numA = parseInt(a.slug.split('_')[1]);
    const numB = parseInt(b.slug.split('_')[1]);
    return numA - numB;
  });

  return {
    props: {
      projects,
    },
  };
}

export default function HomePage({ projects }) {
  return (
    <div className={styles.container}>
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

      <Header />

      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p>
            Hello! I'm a passionate developer with a love for creating clean and efficient solutions. 
            This is a placeholder for a more detailed introduction.
          </p>
        </section>

        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className={styles.projectLink}>
              <div className={styles.projectCard}>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.date}</p>
              </div>
            </Link>
          ))}
        </section>

        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p>
            You can reach me at
          </p>
          <p>
            <a href="mailto:sinhwan0211@gmail.com" className={styles.navLink}>sinhwan0211@gmail.com</a>
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 ShinHwan Kim. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useState } from 'react';

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
    return numB - numA;
  });

  const productsDirectory = path.join(process.cwd(), 'products');
  const productFilenames = fs.readdirSync(productsDirectory);

  const products = productFilenames.map((filename) => {
    const filePath = path.join(productsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ''),
      frontmatter: data,
    };
  });

  products.sort((a, b) => {
    const numA = parseInt(a.slug.split('_')[1]);
    const numB = parseInt(b.slug.split('_')[1]);
    return numB - numA;
  });

  const projectsWithProducts = projects.map(project => {
    const product = products.find(p => p.slug === project.frontmatter.product) || null;
    return {
      ...project,
      product,
    };
  });

  return {
    props: {
      projects: projectsWithProducts,
      products,
    },
  };
}

export default function HomePage({ projects, products }) {
  const [visibleProducts, setVisibleProducts] = useState(3);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 3);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };
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

        <section id="product" className={styles.section}>
          <h2 className={styles.sectionTitle}>Product</h2>
          {products.slice(0, visibleProducts).map((product) => (
            <Link href={`/products/${product.slug}`} key={product.slug} className={styles.projectLink}>
              <div className={styles.projectCard}>
                <h3>{product.frontmatter.title}</h3>
                <p>{product.frontmatter.summary}</p>
                <p>{product.frontmatter.date}</p>
              </div>
            </Link>
          ))}
          {visibleProducts < products.length && (
            <div className={styles.loadMoreContainer}>
              <button onClick={loadMoreProducts} className={styles.loadMoreButton}>
                Load More
              </button>
            </div>
          )}
        </section>

        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          {projects.slice(0, visibleProjects).map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className={styles.projectLink}>
              <div className={styles.projectCard}>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.summary}</p>
                <p className={styles.projectDate}>
                  {project.product && (
                    <>
                      <span className={styles.productLink}>{project.product.frontmatter.title}</span>
                      {' - '}
                    </>
                  )}
                  {project.frontmatter.date}
                </p>
              </div>
            </Link>
          ))}
          {visibleProjects < projects.length && (
            <div className={styles.loadMoreContainer}>
              <button onClick={loadMoreProjects} className={styles.loadMoreButton}>
                Load More
              </button>
            </div>
          )}
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

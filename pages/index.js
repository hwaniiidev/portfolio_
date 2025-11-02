import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useState, useRef, useEffect } from 'react';

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
    const imagePath = path.join(process.cwd(), 'public', 'images', project.slug, 'figure_3.png');
    const imageExists = fs.existsSync(imagePath);
    return {
      ...project,
      product,
      imageExists,
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
  const [visibleProjects, setVisibleProjects] = useState(30);
  const scrollContainerRef = useRef(null);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const scroll = (scrollOffset) => {
    scrollContainerRef.current.scrollLeft += scrollOffset;
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
          <div className={styles.productScrollContainerWrapper}>
            <div className={styles.productScrollContainer} ref={scrollContainerRef}>
              {products.map((product) => (
                <Link href={`/products/${product.slug}`} key={product.slug} className={styles.projectLink}>
                  <div className={styles.productCard}>
                    <div className={styles.productCardImageContainer}>
                      <img src={`/images/product/${product.frontmatter.id}/representation.png`} alt={product.frontmatter.title} className={styles.productImage} />
                    </div>
                    <div className={styles.productDetails}>
                      <h3 className={styles.productCardTitle}>{product.frontmatter.title}</h3>
                      <p className={styles.productCardDate}>{product.frontmatter.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <button className={`${styles.scrollButton} ${styles.scrollButtonLeft}`} onClick={() => scroll(-300)}>
              &#8249;
            </button>
            <button className={`${styles.scrollButton} ${styles.scrollButtonRight}`} onClick={() => scroll(300)}>
              &#8250;
            </button>
          </div>
        </section>



        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.slice(0, visibleProjects).map((project) => {
              const Wrapper = project.frontmatter.detail_page ? Link : 'div';
              const wrapperProps = project.frontmatter.detail_page ? { href: `/projects/${project.slug}`, className: styles.projectLink } : {};

              return (
                <div key={project.slug} className={styles.projectCardWrapper}>
                  <Wrapper key={project.slug} {...wrapperProps}>
                    <div className={`${styles.projectCard} ${!project.frontmatter.detail_page ? styles.disabledCard : ''}`}>
                      {project.imageExists && (
                        <div className={styles.projectImageContainer}>
                          <img src={`/images/${project.slug}/figure_1.png`} alt={project.frontmatter.title} className={styles.projectImage} />
                        </div>
                      )}
                      <h3>{project.frontmatter.title}</h3>
                      <div className={styles.projectMeta}>
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
                      <div className={styles.projectSummary}>
                          <div className={styles.projectSummaryContent}>{project.frontmatter.summary}</div>
                          <div className={styles.tagsContainer}>
                              {project.frontmatter.tags.map((tag) => (
                                  <span key={tag} className={styles.tag}>{tag}</span>
                              ))}
                          </div>
                      </div>
                    </div>
                  </Wrapper>
                </div>
              );
            })}
          </div>
          {visibleProjects < projects.length && (
            <div className={styles.loadMoreContainer}>
              <button onClick={loadMoreProjects} className={styles.loadMoreButton}>
                Load More
              </button>
            </div>
          )}
        </section>
          <section id="contact" className={`${styles.section} ${styles.lastSection}`}>
              <h2 className={styles.sectionTitle}>Contact</h2>
              <p>
                  Thank you for taking the time to review my portfolio.<br/>
                  I truly appreciate your interest.
              </p>
              <p>
                  You can reach me at <a href="mailto:sinhwan0211@gmail.com"
                                         className={styles.emailLink}><em>sinhwan0211@gmail.com</em></a>
              </p>

              <h2>
                  Have a Good Day!
              </h2>
          </section>
      </main>


        <footer className={styles.footer}>
            <p>&copy; 2025 ShinHwan Kim. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

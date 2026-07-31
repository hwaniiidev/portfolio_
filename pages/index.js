import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRef } from 'react';

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
    const imagePath = path.join(process.cwd(), 'public', 'images', project.slug, 'figure_1.png');
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
  const scrollContainerRef = useRef(null);
  const projectScrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainerRef.current.scrollLeft += scrollOffset;
  };

  const scrollProjects = (scrollOffset) => {
    projectScrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hank Kim</title>
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
        <section className={styles.heroSection}>
          <img src="/images/hidden2/profile_img.png" alt="Hank Kim" className={styles.heroProfileImage} />
          <p className={styles.heroText}>
            3-year full-stack developer with lead experience on production apps (MAU 300+).
            Specialized in backend optimization and AI-driven development workflows.
          </p>
        </section>

        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.productScrollContainerWrapper}>
          <div className={styles.productScrollContainer} ref={projectScrollRef}>
            {projects.map((project) => {
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
                      <h3>{project.frontmatter.title}</h3>
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
            <button className={`${styles.scrollButton} ${styles.scrollButtonLeft}`} onClick={() => scrollProjects(-300)}>
              &#8249;
            </button>
            <button className={`${styles.scrollButton} ${styles.scrollButtonRight}`} onClick={() => scrollProjects(300)}>
              &#8250;
            </button>
          </div>
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
                    <div className={styles.productSummary}>
                      <div className={styles.productSummaryContent}>{product.frontmatter.summary}</div>
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

        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.aboutMeText}>
                I am a developer who enjoys using technology <b><em>to solve complex and practical business problems, </em></b>
                placing a strong emphasis on <b><em>team communication</em></b>. I am proficient in backend technologies
                and enjoy the challenge of optimizing system efficiency and aligning development strategies with
                business goals.
                My experience across various projects extends beyond the backend, which allows me to communicate
                effectively with developers in other domains.
                Currently, I am expanding my expertise by studying and researching Machine Learning.
            </p>
        </section>

          <section id="contact" className={`${styles.section} ${styles.lastSection}`}>
              <h2 className={styles.sectionTitle}>Contact</h2>
              <p>
                  Thank you for taking the time to review my portfolio.<br/>
                  I truly appreciate your interest.
              </p>
              <p>
                  You can reach me at <a href="mailto:hank.sh.kim@gmail.com"
                                         className={styles.emailLink}><em>hank.sh.kim@gmail.com</em></a>
              </p>

              <div className={styles.contactLinks}>
                  <a href="https://github.com/hwaniiidev" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/hank-kim-174696380/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      <span>LinkedIn</span>
                  </a>
                  <a href="https://drive.google.com/file/d/1b_4sdImx91EZPyARQHelUbXLV2b5Lc5s/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z"/>
                          <text x="12" y="17" fontFamily="sans-serif" fontSize="13" textAnchor="middle" fill="white" fontWeight="bold">CV</text>
                      </svg>
                      <span>CV</span>
                  </a>
              </div>

          </section>
      </main>


            </div>
  );
}

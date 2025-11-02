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
            안녕하세요!

            저는 다양한 플랫폼과 환경에서 사용자 중심의 솔루션을 만드는 것을 즐기는 개발자입니다. Android, iOS, 웹 프론트엔드 및 백엔드 개발 경험을 바탕으로 아이디어를 실체로 만드는 데 기여해왔습니다.

            Loplat에서는 위치 기반 서비스와 SDK를 개발하며 대용량 트래픽 처리와 데이터 수집 플랫폼 구축 경험을 쌓았습니다. MrDevello에서는 Paradise Hotel, Nolto, Wclub, TtokTtok 365 등 다양한 분야의 프로젝트를 리드하며 React, Flutter, ReactNative 등 크로스플랫폼 앱 개발과 NestJS, Express.js를 이용한 백엔드 시스템 설계 및 구축을 담당했습니다. 특히 TtokTtok 365 프로젝트에서는 리드 개발자로서 기술적인 의사결정과 팀원들의 성장을 이끌었습니다.

            새로운 기술을 배우고 적용하는 것을 두려워하지 않으며, 동료들과의 협업을 통해 더 나은 제품을 만들어나가는 과정에서 큰 보람을 느낍니다. 저의 경험과 기술을 바탕으로 새로운 가치를 창출하는 데 기여하고 싶습니다.
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

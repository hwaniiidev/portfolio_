import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';

const productsDirectory = path.join(process.cwd(), 'products');

export async function getStaticPaths() {
  const filenames = fs.readdirSync(productsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(productsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      slug: params.slug,
      frontmatter: matterResult.data,
      contentHtml,
    },
  };
}

export default function Product({ frontmatter, contentHtml }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectPage}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <h1 style={{ marginRight: '1rem' }}>{frontmatter.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {frontmatter.play_store_url && (
                <a href={frontmatter.play_store_url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '0.5rem' }}>
                  <img src="/images/icon/logo_play_store.svg" alt="Play Store" width="24" height="24" />
                </a>
              )}
              {frontmatter.app_store_url && (
                <a href={frontmatter.app_store_url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '0.5rem' }}>
                  <img src="/images/icon/logo_apple.svg" alt="App Store" width="24" height="24" />
                </a>
              )}
              {frontmatter.web_url && (
                <a href={frontmatter.web_url} target="_blank" rel="noopener noreferrer">
                  <img src="/images/icon/logo_web.svg" alt="Web Page" width="24" height="24" />
                </a>
              )}
            </div>
          </div>
          <div className={styles.projectMeta}>
            <p className={styles.projectDate}>
              {frontmatter.company && frontmatter.company_url && (
                <>
                  <a href={frontmatter.company_url} target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                    {frontmatter.company}
                  </a>
                  {' - '}
                </>
              )}
              {frontmatter.date}
            </p>
          </div>
            <p style={{textIndent: '1em'}}>{frontmatter.description}</p>
          <div className={styles.tagsContainer}>
            {frontmatter.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </main>
    </div>
  );
}

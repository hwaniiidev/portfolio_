
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';

const projectsDirectory = path.join(process.cwd(), 'projects');

export async function getStaticPaths() {
  const filenames = fs.readdirSync(projectsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(projectsDirectory, `${params.slug}.md`);
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

export default function Project({ frontmatter, contentHtml }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectPage}>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </main>
    </div>
  );
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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

  if (matterResult.data.detail_page === false) {
    return {
      notFound: true,
    };
  }

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

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

  const productSlug = matterResult.data.product;
  const product = products.find(p => p.slug === productSlug);

  return {
    props: {
      slug: params.slug,
      frontmatter: matterResult.data,
      contentHtml,
      productSlug,
      product,
    },
  };
}

export default function Project({ frontmatter, contentHtml, productSlug, product }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const imageElements = contentRef.current.getElementsByTagName('img');
      const imageUrls = Array.from(imageElements).map(img => ({ src: img.src }));
      setImages(imageUrls);

      Array.from(imageElements).forEach((img, idx) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
          setIndex(idx);
          setOpen(true);
        });
      });
    }
  }, [contentHtml]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectPage}>
          <h1>{frontmatter.title}</h1>
          <div className={styles.projectMeta}>
            {product && (
              <p className={styles.projectDate}>
                <Link href={`/products/${productSlug}`} className={styles.productLink}>
                  {product.frontmatter.title}
                </Link>
                {' - '}
                {frontmatter.date}
              </p>
            )}
            {!product && <p className={styles.projectDate}>{frontmatter.date}</p>}
          </div>
          <p style={{textIndent: '1em'}}>{frontmatter.description}</p>
          <div className={styles.tagsContainer}>
            {frontmatter.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div ref={contentRef} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </main>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </div>
  );
}

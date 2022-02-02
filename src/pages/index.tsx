import { promises as fsps } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import slug from 'remark-slug';
import autolink from 'remark-autolink-headings';
import Head from 'next/head';
import { unified } from 'unified';
import markdown from 'remark-parse';
import extractToc from 'remark-extract-toc';
import imageSize from 'rehype-img-size';
import components from '../components/MDXComponents';
import ToC, { ToCItem } from '../components/ToC';
import Favicon from '../components/Favicon';
import '@picocss/pico/css/pico.css';
interface Props {
  content: MDXRemoteSerializeResult;
  toc: ToCItem[];
}

export default function Index({ content, toc }: Props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lola Tech&apos;s Handbook</title>
        <meta
          name="description"
          content={
            "Lola Tech's Handbook - all the practical details about working at Lola Tech"
          }
        />
        <Favicon />
      </Head>
      <header className="container">
        <hgroup>
          <h1>Lola Tech&apos;s Handbook</h1>
          <h2>everything you need to know about working at Lola</h2>
        </hgroup>
      </header>
      <main className="container">
        <details>
          <summary>Table of Contents</summary>
          <ToC anchors={toc} />
        </details>

        <MDXRemote {...content} components={components} />
      </main>
      <footer className="container"></footer>
    </>
  );
}

export const getStaticProps = async () => {
  // Grab our markdown file
  const source = await fsps.readFile(
    path.join(process.cwd(), 'content', 'index.md'),
  );

  // Process it directly to extract data for the table of contents
  const extractor = unified()
    .use(markdown)
    .use(slug)
    .use(extractToc, { keys: ['data'] });
  const node = extractor.parse(source);
  const toc = extractor.runSync(node);

  // Prepare the markdown for handoff to mdx-remote
  // Use some remark plugins to:
  //  - slug and link the headings
  const mdxSource = await serialize(source.toString(), {
    mdxOptions: {
      remarkPlugins: [slug, autolink],
      rehypePlugins: [[imageSize, { dir: 'public' }]],
    },
  });

  return { props: { content: mdxSource, toc } };
};

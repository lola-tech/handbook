import Head from 'next/head';
// Gubbins for fetching and wrangling our Markdown content
import { promises as fsps } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import slug from 'remark-slug';
import autolink from 'remark-autolink-headings';
import { unified } from 'unified';
import markdown from 'remark-parse';
import extractToc from 'remark-extract-toc';
import imageSize from 'rehype-img-size';
// Stuff to render it!
import components from '../components/MDXComponents';
import ToC, { ToCItem } from '../components/ToC';
import Header from '../components/Header';
import Favicon from '../components/Favicon';
import Footer from '@/components/Footer';
import Alerts from '@/components/Alerts';

interface Props {
  content: MDXRemoteSerializeResult;
  toc: ToCItem[];
}

export default function Index({ content, toc }: Props) {
  return (
    <html>
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

      <body>
        <Header />
        <main className="container">
          <div className="toc">
            <ToC anchors={toc} />
          </div>
          <MDXRemote {...content} components={components} />
          <Alerts type="red" message="ddvvn" />
          <Alerts type="yellow" message="ddvvn" />
          <Alerts type="green" message="ddvvn" />
          <Alerts type="blue" message="ddvvn" />
          <Alerts type="grey" message="ddvvn" />
        </main>
        <Footer />
      </body>
    </html>
  );
}

export const getStaticProps = async () => {
  // Grab our markdown file - it gets written by the CMS and committed - which triggers a deployment
  const source = await fsps.readFile(
    path.join(process.cwd(), 'content', 'index.md'),
  );

  /**
   * Process it directly to extract data for the table of contents
   *
   * This is a bit fiddly :-(
   * We parse the markdown and then pass it through a couple of remark plugins
   * `slug` parses out each heading element and generates a slug
   * `extractToc` builds an object of data reperesenting nested heading levels
   */
  const extractor = unified()
    .use(markdown)
    .use(slug)
    .use(extractToc, { keys: ['data'] }); // the second argument gets the slug and adds it to the toc data
  const node = extractor.parse(source);
  const toc = extractor.runSync(node);

  /**
   * Prepare the markdown for handoff to mdx-remote
   *
   *   Use some remark plugins to:
   *   - slug and link the headings
   *   - add height and width to img elements for the benefit of next/image
   */
  const mdxSource = await serialize(source.toString(), {
    mdxOptions: {
      remarkPlugins: [slug, autolink],
      rehypePlugins: [[imageSize, { dir: 'public' }]],
    },
  });

  return {
    props: {
      content: mdxSource,
      toc,
    },
  };
};

// NOTE: we need clientside js for ToC page
export const config = {
  // So, this is cool. Use it on any next.js page to remove all clientside js from the output.
  // Of course you only want to do this on super-static views like this one - but the page will be super-fast now.
  // unstable_runtimeJS: false,
};

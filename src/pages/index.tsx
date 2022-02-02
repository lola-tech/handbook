import { promises as fsps } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import slug from 'remark-slug';
import autolink from 'remark-autolink-headings';
import components from '../components/MDXComponents';
import { Heading } from '@chakra-ui/react';
import ToC, { ToCItem } from '../components/ToC';
import { unified } from 'unified';
import markdown from 'remark-parse';
import extractToc from 'remark-extract-toc';
import imageSize from 'rehype-img-size';
interface Props {
  content: MDXRemoteSerializeResult;
  toc: ToCItem[];
}

export default function Index({ content, toc }: Props) {
  return (
    <>
      <Heading as="h1" size="3xl">
        Lola Tech&apos;s Handbook
      </Heading>
      <ToC anchors={toc} />
      <MDXRemote {...content} components={components} />
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

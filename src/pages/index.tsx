import { readFile } from 'fs/promises';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import slug from 'remark-slug';
import autolink from 'remark-autolink-headings';
import components from '../components/MDXComponents';
import ToC, { TOCItem } from '../components/ToC';
import { unified } from 'unified';
import markdown from 'remark-parse';
import extractToc from 'remark-extract-toc';
interface Props {
  content: MDXRemoteSerializeResult;
  toc: TOCItem[];
}

export default function Index({ content, toc }: Props) {
  return (
    <>
      <ToC anchors={toc} />
      <MDXRemote {...content} components={components} />
    </>
  );
}

export const getStaticProps = async () => {
  // Grab our markdown file
  const source = await readFile(
    path.join(process.cwd(), 'content', 'index.mdx'),
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
    },
  });

  return { props: { content: mdxSource, toc } };
};

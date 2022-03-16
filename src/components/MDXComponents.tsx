/**
 * Map html elements to react components
 *
 * allows us to do fancy things to our markdown content
 */

import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

interface ElementProps {
  id: string;
  children: [JSX.Element];
}

const components = {
  img: function img(props: ImageProps) {
    return (
      <Image layout="responsive" loading="lazy" {...props} alt={props.alt} />
    );
  },
  h2: function h2(props: ElementProps) {
    return (
      <>
        <div className="dots-separator">
          <Image
            src="/dots.svg"
            className=""
            alt="dots"
            width={68}
            height={12}
          />
        </div>
        <h2 id={props.id}>{props.children}</h2>
        <Link href={'/#-toc'} passHref>
          <div className="divider-container">
            <div className="divider"></div>
            <div className="jump">Jump</div>
            <div className="arrow-container">
              <Image
                src="/corner-right-up.svg"
                className="arrow"
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
          </div>
        </Link>
      </>
    );
  },
};

export default components;

/**
 * Map html elements to react components
 *
 * allows us to do fancy things to our markdown content
 */

import { useTheme } from '@/themeProvider/themeContext';
import Image, { ImageProps } from 'next/image';

interface ElementProps {
  id: string;
  children: [JSX.Element];
}

interface PropsInterface {
  content: ElementProps;
}

import React, { FC } from 'react';

const H2: FC<PropsInterface> = (props) => {
  const { theme } = useTheme();
  return (
    <>
      <div className="dots-separator">
        <Image
          src={theme === 'dark' ? '/dots-dark.svg' : '/dots.svg'}
          className=""
          alt="dots"
          width={68}
          height={12}
        />
      </div>
      <h2 id={props.content.id}>{props.content.children}</h2>
      <div className="link-container">
        <a href={'/#-toc'}>
          <div className="divider-container">
            <div className="divider"></div>
            <div className="jump">Jump</div>
            <div className="arrow-container">
              <Image
                src="/corner-right-up-hover.svg"
                alt=""
                layout="fill"
                objectPosition="0 0"
              />
              <Image
                src={
                  theme === 'dark'
                    ? '/corner-right-up-white.svg'
                    : '/corner-right-up.svg'
                }
                className="arrow"
                alt=""
                layout="fill"
                objectPosition="0 0"
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

const components = {
  img: function img(props: ImageProps) {
    return (
      <Image layout="responsive" loading="lazy" {...props} alt={props.alt} />
    );
  },
  h2: function h2(props: ElementProps) {
    return <H2 content={props} />;
  },
  h3: function h3(props: ElementProps) {
    return (
      <>
        <h3 id={props.id}>{props.children}</h3>
      </>
    );
  },
};

export default components;

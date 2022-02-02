/**
 * Map html elements to react components
 *
 * allows us to do fancy things to our markdown content
 */

import Image, { ImageProps } from 'next/image';

const components = {
  img: function img(props: ImageProps) {
    return (
      <Image layout="responsive" loading="lazy" {...props} alt={props.alt} />
    );
  },
};

export default components;

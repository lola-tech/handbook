import {
  ChakraProps,
  Heading,
  chakra,
  UnorderedList,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import NextImage, { ImageProps } from 'next/image';

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader ',
      'layout',
    ].includes(prop),
});

const components = {
  h1: function h1(props: ChakraProps) {
    return <Heading {...props} as="h1" size="4xl" />;
  },
  h2: function h2(props: ChakraProps) {
    return <Heading {...props} as="h2" size="2xl" />;
  },
  h3: function h3(props: ChakraProps) {
    return <Heading {...props} as="h3" size="xl" />;
  },
  h4: function h4(props: ChakraProps) {
    return <Heading {...props} as="h4" size="lg" />;
  },
  h5: function h5(props: ChakraProps) {
    return <Heading {...props} as="h5" size="md" />;
  },
  h6: function h6(props: ChakraProps) {
    return <Heading {...props} as="h6" size="sm" />;
  },
  img: function img(props: ImageProps) {
    return (
      <Image layout="responsive" loading="lazy" {...props} alt={props.alt} />
    );
  },
  ul: function ul(props: ChakraProps) {
    return <UnorderedList {...props} />;
  },
  ol: function ol(props: ChakraProps) {
    return <OrderedList {...props} />;
  },
  li: function li(props: ChakraProps) {
    return <ListItem {...props} />;
  },
};

export default components;

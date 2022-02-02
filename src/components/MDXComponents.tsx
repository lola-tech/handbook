import { ChakraProps, Heading } from '@chakra-ui/react';

const components = {
  h1: function h1(props: ChakraProps) {
    return <Heading {...props} as="h1" />;
  },
  h2: function h2(props: ChakraProps) {
    return <Heading {...props} as="h2" />;
  },
  h3: function h3(props: ChakraProps) {
    return <Heading {...props} as="h3" />;
  },
  h4: function h4(props: ChakraProps) {
    return <Heading {...props} as="h4" />;
  },
  h5: function h5(props: ChakraProps) {
    return <Heading {...props} as="h5" />;
  },
  h6: function h6(props: ChakraProps) {
    return <Heading {...props} as="h6" />;
  },
};

export default components;

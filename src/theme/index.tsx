import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  fonts: {
    body: `Inter`,
  },
  colors: {
    brand: {
      white: '#FFF',
      gray: '#718096',
      grayMid: '#73747B',
      darkGray: '#2D3748',
      darkBlue: '#101C33',
      teal: '#319795',
      purple: '#805AD5',
      pink: '#D53F8C',
    },
  },
});

export default theme;

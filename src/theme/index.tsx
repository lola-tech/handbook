import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  fonts: {
    body: `Mulish`,
  },
});

export default theme;

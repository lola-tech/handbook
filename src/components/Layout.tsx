import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Container, VStack } from '@chakra-ui/react';
import Favicon from './Favicon';
import Navbar from './Navbar';

type Props = {
  children?: ReactNode;
  props?: Record<string, string>;
};

const Layout = ({ children, props }: Props) => (
  <>
    <Head>
      <title>{props?.title}</title>
      <meta name="description" content={props?.description} />
      <Favicon />
    </Head>
    <Navbar />
    <Container
      maxW="container.md"
      marginTop="2rem"
      marginBottom="10rem"
      shadow="dark-lg"
    >
      <VStack spacing="3rem" align="left" p="3rem">
        {children}
      </VStack>
    </Container>
  </>
);

export default Layout;

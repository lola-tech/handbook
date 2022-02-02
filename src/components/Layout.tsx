import React, { ReactNode } from 'react';
import Head from 'next/head';
import Favicon from './Favicon';

type Props = {
  children?: ReactNode;
  props?: Record<string, string>;
};

const Layout = ({ children, props }: Props) => (
  <>
    <Head>
      <title>Lola Tech&apos;s Handbook</title>
      <meta
        name="description"
        content={
          "Lola Tech's Handbook - all the practical details about working at Lola Tech"
        }
      />
      <Favicon />
    </Head>
    {children}
  </>
);

export default Layout;

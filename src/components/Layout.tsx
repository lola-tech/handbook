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
      <title>Lola Tech: Handbook</title>
      <meta name="description" content={"Lola Tech's company handbook"} />
      <Favicon />
    </Head>
    {children}
  </>
);

export default Layout;

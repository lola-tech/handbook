import { Heading, Text, Code } from '@chakra-ui/react';
import { Layout } from '@/components';

export default function Index() {
  return (
    <Layout
      props={{
        title: `Lola UI Starter`,
        description: `Lola UI Starter index page`,
      }}
    >
      <Heading>Lola UI Starter</Heading>
      <Text>
        Edit this page here:{` `}
        <Code>./src/pages/index.tsx</Code>
      </Text>
      <Text fontSize="smaller">(Static page.)</Text>
    </Layout>
  );
}

import { useState, useEffect } from 'react';
import { Heading, Text, Code, Image, Spinner, Center } from '@chakra-ui/react';
import { Layout } from '@/components';

const API_URL = `https://cors-anywhere.herokuapp.com/https://loripsum.net/api/short/plaintext`;

export default function LoremIpsum() {
  const [props, setProps] = useState({
    title: ``,
    description: ``,
    content: ``,
  });
  useEffect(() => {
    fetch(API_URL).then((resp) =>
      resp.text().then((txt) => {
        setProps({
          title: `Lorem Ipsum`,
          description: `${txt.split(`.`)[0]}.`,
          content: txt,
        });
      }),
    );
  }, []);
  if (!props.title) {
    return (
      <Layout>
        <Center>
          <Spinner />
        </Center>
      </Layout>
    );
  }
  return (
    <Layout
      props={{
        title: `Lola UI Starter - ${props.title}`,
        description: props.description,
      }}
    >
      <Heading>{props.title}</Heading>
      <Text>
        Edit this page at:{` `}
        <Code>./src/pages/lorem-ipsum.tsx</Code>
      </Text>
      <Image
        rounded={15}
        alt="example image"
        src="https://picsum.photos/600/200"
        w="600px"
        h="200px"
      />
      <Text fontSize="larger">{props.content}</Text>
      <Text fontSize="smaller">(Dynamic page.)</Text>
    </Layout>
  );
}

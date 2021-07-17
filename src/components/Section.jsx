import React from 'react';
import { Flex, Text, SimpleGrid } from '@chakra-ui/react';
import Card from 'components/Card';

export default function Section({ template }) {
  return (
    <Flex direction="column" align="left" maxW={{ xl: '768px' }} py="24px">
      <Text fontSize="xl" fontWeight="bolder" letterSpacing="wider" my={5}>
        {template.title}
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {template.sections[0].articles.map(article => (
          <Card article={article} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

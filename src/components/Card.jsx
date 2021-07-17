import { Box, Image, useColorModeValue, Flex } from '@chakra-ui/react';
import { BiBookAdd } from 'react-icons/bi';

export default function Card({ article }) {
  const dataLocal = JSON.parse(localStorage.getItem('bookmark'));
  const handleBokmark = book => {
    localStorage.setItem('bookmark', JSON.stringify(dataLocal, book));
  };
  return (
    <Box
      maxH={'350px'}
      minH={'350px'}
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <a href={article.url.url}>
        <Image
          src={`https://obs.line-scdn.net/${article.thumbnail.hash}/w580`}
          objectFit={'cover'}
          height={200}
          alt={article.title}
        />
      </a>
      <Box p="6">
        <a href={article.url.url}>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            // isTruncated
          >
            {article.title}
          </Box>
        </a>
        <Box mt={2}>
          <Flex justifyContent="space-between">
            <Box
              as="span"
              color={useColorModeValue('gray.800', 'gray.400')}
              fontSize="sm"
            >
              {article.publisher}
            </Box>
            <BiBookAdd
              width={5}
              height={5}
              onClick={() => handleBokmark(article)}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

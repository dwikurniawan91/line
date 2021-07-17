import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import axios from 'axios';
import Header from 'components/Header';
import Corousel from 'components/Corousel';
import Section from 'components/Section'; // will add this in the part 2
import Card from 'components/Card';
export default function LandingLayout(props) {
  const [category, setCategory] = React.useState([]);
  const [content, setContent] = React.useState([]);
  const [pages, setPages] = React.useState([]);

  React.useEffect(() => {}, []);

  const getBookmark = localStorage.getItem('bookmark');
  console.log({ getBookmark });

  React.useEffect(() => {}, []);

  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: '768px' }}
      m="0 auto"
      {...props}
    >
      {/* {get.map(template => (
        <Card article={getBookmark} />
      ))} */}
    </Flex>
  );
}

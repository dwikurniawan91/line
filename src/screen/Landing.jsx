import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import axios from 'axios';
import Header from 'components/Header';
import Corousel from 'components/Corousel';
import Section from 'components/Section'; // will add this in the part 2

export default function LandingLayout(props) {
  const [category, setCategory] = React.useState([]);
  const [content, setContent] = React.useState([]);
  const [pages, setPages] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: 'GET',
      url: '/id/portaljson',
    }).then(res => {
      setCategory(res.data.result.categoryList);
      setContent(res.data.result.categories);
      setPages(res.data.result.categories[0]);
    });
  }, []);

  const handlePages = id => {
    console.log({ id });
    const pages = content.filter(e => e.id === id);
    setPages(pages[0]);
  };

  React.useEffect(() => {
    console.log({ pages: pages?.templates });
  }, [pages]);

  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: '768px' }}
      m="0 auto"
      {...props}
    >
      <Header category={category} handlePages={handlePages} />
      <Box mt={10}>
        <Corousel data={pages} />
      </Box>
      {pages?.templates?.map(
        template =>
          template.title && (
            <React.Fragment key={template.title}>
              <Section template={template} />
            </React.Fragment>
          )
      )}
    </Flex>
  );
}

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Center, Text, useColorModeValue } from '@chakra-ui/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from 'swiper';
import 'swiper/swiper-bundle.css';
import './style.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

export default function Corousel({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [dataSwiper, setDataSwiper] = useState([]);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  React.useEffect(() => {
    const mapData = data?.templates?.map(item => item);
    setDataSwiper(mapData);
  }, [data]);
  const color = useColorModeValue('white', 'black');
  console.log({ dataSwiper });
  return (
    <React.Fragment>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        autoplay={{ delay: 4000 }}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        onInit={swiper => console.log('Swiper initialized!', swiper)}
        onSlideChange={swiper => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      > 
        {dataSwiper !== undefined &&
          dataSwiper[7]?.sections[0]?.articles?.map(item => (
            <>
              <SwiperSlide key={item.id} tag="li">
                <Box h={300}>
                  <img
                    src={`https://obs.line-scdn.net/${item.thumbnail.hash}`}
                    // objectFit={'cover'}
                    // height={'200px'}
                    alt={item.title}
                  />
                </Box>
                <Center>
                  <Box bg={color} mb={5} p={2} borderRadius={10}>
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      letterSpacing="wider"
                      color="dark"
                    >
                      {item.title}
                    </Text>
                  </Box>
                </Center>
              </SwiperSlide>
            </>
          ))}
      </Swiper>
      {/* <Swiper
        style={{ height: '50px' }}
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        autoplay={{ delay: 4000 }}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        onInit={swiper => console.log('Swiper initialized!', swiper)}
        onSlideChange={swiper => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        {dataSwiper !== undefined &&
          dataSwiper[7]?.sections[0]?.articles?.map(item => (
            <>
              <SwiperSlide key={item.id} tag="li">
                <Center>
                  <Box h={300}>
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      letterSpacing="wider"
                      color="dark"
                    >
                      {item.title}
                    </Text>
                  </Box>
                </Center>
              </SwiperSlide>
            </>
          ))}
        {/* <Box bg="" p={2} zIndex={9}>
              
            </Box> */}
      {/* </Swiper> */}
    </React.Fragment>
  );
}

import React from 'react'
import {Box,Image,Heading, Container,Stack,Text} from '@chakra-ui/react';
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingoptions ={
   pos:"absolute",
   left:"50%",
   top:"50%",
   transform:"translate(-50%,-50%)",
   textTransform:'uppercase',
   p:'4',
   size:'4xl'
}


 const Home = () => {
   return (
     <Box>
       <MyCarousel />
       <Container minH={'100vh'} maxW={'Container.xl'} p="16">
         <Heading
           textTransform={'uppercase'}
           py="2"
           w={'fit-content'}
           borderBottom={'2px solid'}
           m="auto"
         >
           Services
         </Heading>

         <Stack
           h="full"
           p={'4'}
           alignItems={'center'}
           direction={['column', 'row']}
         >
           <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

           <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Repudiandae perspiciatis placeat aliquid, labore magnam harum
             impedit eligendi vero perferendis minus sint libero a totam
             blanditiis pariatur consequuntur cum sunt saepe?
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Repudiandae perspiciatis placeat aliquid, labore magnam harum
             impedit eligendi vero perferendis minus sint libero a totam
             blanditiis pariatur consequuntur cum sunt saepe?
           </Text>
         </Stack>
       </Container>
     </Box>
   );
    
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
        {' '}
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoptions}>
        {' '}
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoptions}>
        {' '}
        Gaming On Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoptions}>
        {' '}
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);


export default Home;



//  objectFit={'cover'} for maintaining aspect ration of image

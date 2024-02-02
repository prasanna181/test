import React from 'react';
import { Box, Image, Heading,Input,Button, Container, Stack, Text, VStack, HStack } from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="md" textTransform={'uppercase'} >
            subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter Email Here..."
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0 '}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            {' '}
            video hub
          </Heading>
          <Text>All rigts reserved </Text>
        </VStack>

        <VStack w={'full'} borderRight={['none', '1px solid white']}>
          <Heading size={'md'} textTransform={'uppercase'}>
            social media
          </Heading>

          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://youtube.com" target={'_blank'}>
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://instagram.com" target={'_blank'}>
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://github.com" target={'_blank'}>
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

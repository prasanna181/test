import { VStack,Container, HStack,Input,Button } from '@chakra-ui/react';
import {AiOutlineCloudUpload} from 'react-icons/ai';
import React from 'react';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input
              required
              type={'file'}
              css={{
                '&:: file-selector-button': {
                  width: 'calc(100% + 36px)',
                // width:'100%',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor:'pointer'
                },
              }}
            />
            <Button colorScheme={'purple'} type={'submit'}>
              upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
}

export default Upload
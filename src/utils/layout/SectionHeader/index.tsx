import * as React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export const SectionHeader = () => (
  <Box w='100%' d='flex' justifyContent='center' alignItems='center' mb='5rem'>
    <Box color='black' bg='white' py={2} px={32} borderRadius='200px'>
      <Heading fontWeight='semibold' fontSize={26}>
        {`recent projects`.toUpperCase()}
      </Heading>
    </Box>
  </Box>
)

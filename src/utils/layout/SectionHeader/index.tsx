import * as React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export const SectionHeader: React.FC = ({ children }) => (
  <Box w='100%' d='flex' justifyContent='center' alignItems='center'>
    <Box color='black' bg='white' py={2} px={32} borderRadius='200px'>
      <Heading fontWeight='semibold' fontSize={26}>
        {children && children.toString().toUpperCase()}
      </Heading>
    </Box>
  </Box>
)

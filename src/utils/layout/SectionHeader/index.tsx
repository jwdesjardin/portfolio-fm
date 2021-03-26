import * as React from 'react'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'

export const SectionHeader: React.FC = ({ children }) => {
  const boxBg = useColorModeValue('myDark.500', 'myWhite.500')
  const boxColor = useColorModeValue('myWhite.500', 'myDark.500')

  return (
    <Box w='100%' d='flex' justifyContent='center' alignItems='center'>
      <Box color={boxColor} bg={boxBg} py={2} px={24} borderRadius='200px'>
        <Heading textAlign='center' size='md' fontWeight='semibold'>
          {children && children.toString().toUpperCase()}
        </Heading>
      </Box>
    </Box>
  )
}

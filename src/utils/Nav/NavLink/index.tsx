import * as React from 'react'
import { Box } from '@chakra-ui/react'

export const NavLink: React.FC = ({ children }) => {
  return (
    <Box bg='blackAlpha.800' w='200px' d='flex' borderRadius='md' p={4} m={1} pl='2.5rem'>
      {children}
    </Box>
  )
}

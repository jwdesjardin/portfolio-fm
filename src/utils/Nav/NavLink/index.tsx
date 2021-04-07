import { useColorMode, useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'

import { MotionBox } from '../../animations'

const linkVariants = {
  initial: {},
  light: { backgroundColor: '#eaebeb' },
  dark: { backgroundColor: '#020c12' },
}

export const NavLink: React.FC = ({ children }) => {
  const { colorMode } = useColorMode()
  const [mobile] = useMediaQuery('(max-width: 450px)')
  return (
    <MotionBox
      fontWeight='bold'
      fontSize={20}
      d='flex'
      alignItems='center'
      borderRadius='md'
      minW={mobile ? '160px' : '200px'}
      p={2}
      m={1}
      variants={linkVariants}
      initial='initial'
      whileHover={colorMode === 'light' ? 'light' : 'dark'}
      transistion={{ duration: 0.7 }}
    >
      {children}
    </MotionBox>
  )
}

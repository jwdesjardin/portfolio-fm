import * as React from 'react'

import { MotionBox } from '../../animations'

const linkVariants = {
  initial: { backgroundColor: '#444' },
  hover: { backgroundColor: '#222' },
}

export const NavLink: React.FC = ({ children }) => {
  return (
    <MotionBox
      bg='blackAlpha.600'
      fontWeight='bold'
      fontSize={20}
      w='200px'
      d='flex'
      alignItems='center'
      borderRadius='md'
      p={2}
      m={1}
      pl='2.5rem'
      variants={linkVariants}
      initial='initial'
      whileHover='hover'
      transistion={{ duration: 0.7 }}
    >
      {children}
    </MotionBox>
  )
}

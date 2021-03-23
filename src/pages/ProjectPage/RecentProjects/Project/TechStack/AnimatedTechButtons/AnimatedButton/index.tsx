import * as React from 'react'
import { Center, Circle, Text } from '@chakra-ui/react'
import { KeyboardArrowDown } from '@material-ui/icons'
import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  index: number
}

export const AnimatedButton = ({ index = 0 }) => {
  const ChevronDownIcon = () => (
    <KeyboardArrowDown style={{ fontSize: '1.2rem' }}></KeyboardArrowDown>
  )

  const MotionCircle = motion(Circle)

  const colors = ['#067BDB', '#8a2cc9', '#2ec486', '#ff9f1c']

  return (
    <MotionCircle
      size='125px'
      bg='white'
      color='black'
      whileHover={{
        backgroundColor: colors[index % 4],
        color: '#FFF',
        y: [10, 0, 5, 0],
        rotate: [0, 5, -5, 5, 0],
      }}
      whileClick={{ scale: 0.1, opacity: 0 }}
      onClick={() => console.log('clicky')}
    >
      <Center flexDirection='column'>
        <Text fontWeight='semibold'>Typescript</Text>
        <ChevronDownIcon></ChevronDownIcon>
      </Center>
    </MotionCircle>
  )
}

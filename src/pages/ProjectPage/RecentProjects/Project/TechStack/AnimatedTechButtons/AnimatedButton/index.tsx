import * as React from 'react'
import { Center, Circle, Text, useColorModeValue } from '@chakra-ui/react'
import { KeyboardArrowDown } from '@material-ui/icons'
import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  index: number
  animateLocation: string
  setOpenModal: React.Dispatch<React.SetStateAction<string | null>>
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  index = 0,
  setOpenModal,
  animateLocation,
}) => {
  const ChevronDownIcon = () => (
    <KeyboardArrowDown style={{ fontSize: '1.2rem' }}></KeyboardArrowDown>
  )

  const MotionCircle = motion(Circle)

  const colors = ['#067BDB', '#8a2cc9', '#2ec486', '#ff9f1c']

  const AnimatedButtonVariants = {
    initial: { opacity: 0, scale: 0.2 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    exit: { opacity: 0, scale: 0.2, transition: { duration: 0.7 } },
  }

  const circleBg = useColorModeValue('myDark.500', 'myWhite.500')
  const circleColor = useColorModeValue('myWhite.500', 'myDark.500')

  return (
    <MotionCircle
      size='125px'
      bg={circleBg}
      color={circleColor}
      whileHover={{
        backgroundColor: colors[index % 4],
        color: '#FFF',
        // y: [10, 0, 5, 0],
        // rotate: [0, 5, -5, 5, 0],
        y: [0, -7, -7, -7, -7],
        rotate: [0, -5, 5, -5, 0],
      }}
      // whileTap={{ scale: 0.1, opacity: 0 }}
      onClick={() => setOpenModal(animateLocation)}
      variants={AnimatedButtonVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      cursor='pointer'
    >
      <Center flexDirection='column'>
        <Text fontWeight='semibold'>Typescript</Text>
        <ChevronDownIcon></ChevronDownIcon>
      </Center>
    </MotionCircle>
  )
}

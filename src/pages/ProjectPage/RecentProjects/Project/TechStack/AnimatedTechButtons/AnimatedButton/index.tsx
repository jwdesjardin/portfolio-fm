import * as React from 'react'
import { Center, Circle, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import { KeyboardArrowDown } from '@material-ui/icons'
import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  index: number
  animateLocation: string
  setOpenModal: React.Dispatch<React.SetStateAction<string | null>>
  project: any
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  index = 0,
  setOpenModal,
  animateLocation,
  project,
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
  const [mobile] = useMediaQuery('(max-width: 400px)')

  const getButtonTitle = (index: number) => {
    if (project) {
      switch (index) {
        case 0:
          return project.topicTitle1
        case 1:
          return project.topicTitle2
        case 2:
          return project.topicTitle3
        case 3:
          return project.topicTitle4
        default:
          return
      }
    }
  }

  const buttonTitle = getButtonTitle(index)

  return (
    <MotionCircle
      size={mobile ? '100px' : '125px'}
      fontSize={14}
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
      p={2}
    >
      <Center flexDirection='column'>
        <Text textAlign='center' fontWeight='semibold'>
          {buttonTitle}
        </Text>
        <ChevronDownIcon></ChevronDownIcon>
      </Center>
    </MotionCircle>
  )
}

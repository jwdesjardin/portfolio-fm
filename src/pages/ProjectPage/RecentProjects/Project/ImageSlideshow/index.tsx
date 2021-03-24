import * as React from 'react'
import { Box, Center, Image } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { shakeAnimation } from '../../../../../utils/animations'

export const ImageSlideshow = () => {
  const ChevronLeftIcon = () => <ChevronLeft style={{ fontSize: '2.5rem' }}></ChevronLeft>
  const ChevronRightIcon = () => <ChevronRight style={{ fontSize: '2.5rem' }}></ChevronRight>

  const MotionImage = motion(Image)

  const ImageVariants = {
    initial: { opacity: 0, x: -450, rotate: -10 },
    animate: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, x: 450, rotate: 10, transition: { duration: 0.7 } },
  }

  const [imageIdx, setImageIdx] = React.useState(0)

  const imageSrc = ['/images/project1.png', '/images/project2.JPG', '/images/project3.jpg']

  const MotionBox = motion(Box)

  return (
    <Box w='100%' d='flex' justifyContent='space-evenly' alignItems='center'>
      {/* chevronleft */}
      <MotionBox p={4} onClick={() => setImageIdx(imageIdx - 1)} whileHover={shakeAnimation}>
        <ChevronLeftIcon></ChevronLeftIcon>
      </MotionBox>

      {/* image */}

      <Center h='250px' w='450px'>
        <AnimatePresence exitBeforeEnter>
          <MotionImage
            key={imageIdx}
            w='100%'
            src={imageSrc[imageIdx]}
            objectFit='contain'
            borderRadius='md'
            variants={ImageVariants}
            initial='initial'
            animate='animate'
            exit='exit'
          ></MotionImage>
        </AnimatePresence>
      </Center>

      {/* chevronright */}
      <MotionBox p={4} onClick={() => setImageIdx(imageIdx + 1)} whileHover={shakeAnimation}>
        <ChevronRightIcon></ChevronRightIcon>
      </MotionBox>
    </Box>
  )
}

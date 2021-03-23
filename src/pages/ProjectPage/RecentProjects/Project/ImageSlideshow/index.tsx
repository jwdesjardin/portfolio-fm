import * as React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'

export const ImageSlideshow = () => {
  const ChevronLeftIcon = () => <ChevronLeft style={{ fontSize: '2.5rem' }}></ChevronLeft>
  const ChevronRightIcon = () => <ChevronRight style={{ fontSize: '2.5rem' }}></ChevronRight>

  const MotionImage = motion(Image)

  const ImageVariants = {
    initial: { opacity: 0, x: -250, height: 250 },
    animate: { opacity: 1, x: 0, height: 250 },
    exit: { opacity: 0, x: 250, height: 250 },
  }

  const [imageIdx, setImageIdx] = React.useState(0)

  const imageSrc = ['/images/project1.png', '/images/project2.JPG', '/images/project3.jpg']

  const MotionBox = motion(Box)

  return (
    <Box w='100%' d='flex' justifyContent='space-evenly' alignItems='center'>
      {/* chevronleft */}
      <MotionBox p={4} onClick={() => setImageIdx(imageIdx - 1)} whileHover={{ y: [5, -5, 5, 0] }}>
        <ChevronLeftIcon></ChevronLeftIcon>
      </MotionBox>

      {/* image */}

      <AnimatePresence>
        <MotionImage
          w='60%'
          src={imageSrc[imageIdx]}
          objectFit='contain'
          borderRadius='md'
          variants={ImageVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        ></MotionImage>
      </AnimatePresence>

      {/* chevronright */}
      <MotionBox p={4} onClick={() => setImageIdx(imageIdx + 1)} whileHover={{ y: [5, -5, 5, 0] }}>
        <ChevronRightIcon></ChevronRightIcon>
      </MotionBox>
    </Box>
  )
}

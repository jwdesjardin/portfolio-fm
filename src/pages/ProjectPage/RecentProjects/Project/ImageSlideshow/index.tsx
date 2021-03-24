import * as React from 'react'
import { Box, Center, Image } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { MotionCenter, MotionCircle, shakeAnimation } from '../../../../../utils/animations'
import { wrap } from '@popmotion/popcorn'

export const ImageSlideshow = () => {
  const ChevronLeftIcon = () => <ChevronLeft style={{ fontSize: '2.5rem' }}></ChevronLeft>
  const ChevronRightIcon = () => <ChevronRight style={{ fontSize: '2.5rem' }}></ChevronRight>

  const MotionImage = motion(Image)

  const ImageVariants = {
    initial: { opacity: 0, x: -450, rotate: -10 },
    animate: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, x: 450, rotate: 10, transition: { duration: 0.7 } },
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -500 : 500,
        opacity: 0,
      }
    },
  }

  const imageSrc = ['/images/project1.png', '/images/project2.JPG', '/images/project3.jpg']

  const MotionBox = motion(Box)

  const [[page, direction], setPage] = React.useState([0, 0])

  const paginate = (direction: number) => {
    setPage([page + direction, direction])
  }

  const index = wrap(0, imageSrc.length, page)

  const dragEndFunc = (
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    if (offset.x > 400) {
      paginate(-1)
    } else if (offset.x < -400) {
      paginate(1)
    }
  }

  return (
    <Box w='100%' d='flex' justifyContent='space-evenly' alignItems='center'>
      {/* chevronleft */}
      <MotionCircle p={4} size='50px' bg='rgba(0,0,0,.3)' onClick={() => paginate(1)}>
        <ChevronLeftIcon></ChevronLeftIcon>
      </MotionCircle>

      {/* image */}

      <Center h='250px' w='450px'>
        <AnimatePresence exitBeforeEnter custom={direction}>
          <MotionImage
            key={page}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ duration: 0.35 }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={dragEndFunc}
            w='100%'
            src={imageSrc[index]}
            objectFit='contain'
            borderRadius='md'
          ></MotionImage>
        </AnimatePresence>
      </Center>

      {/* chevronright */}
      <MotionCircle p={4} size='50px' bg='rgba(0,0,0,.3)' onClick={() => paginate(1)}>
        <ChevronRightIcon></ChevronRightIcon>
      </MotionCircle>
    </Box>
  )
}

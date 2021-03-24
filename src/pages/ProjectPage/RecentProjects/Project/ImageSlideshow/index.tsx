import * as React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import { AnimatePresence, PanInfo } from 'framer-motion'
import { MotionCircle, MotionImage } from '../../../../../utils/animations'
import { wrap } from '@popmotion/popcorn'

export const ImageSlideshow = () => {
  const ChevronLeftIcon = () => <ChevronLeft style={{ fontSize: '2.5rem' }}></ChevronLeft>
  const ChevronRightIcon = () => <ChevronRight style={{ fontSize: '2.5rem' }}></ChevronRight>

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      rotate: direction > 0 ? 10 : -10,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotate: 0,
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -500 : 500,
        rotate: direction > 0 ? -10 : 10,
        opacity: 0,
      }
    },
  }

  const imageSrc = ['/images/project1.png', '/images/project2.JPG', '/images/project3.jpg']

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
      <MotionCircle
        p={4}
        size='50px'
        bg='rgba(0,0,0,.3)'
        onClick={() => paginate(-1)}
        cursor='pointer'
      >
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
      <MotionCircle
        p={4}
        size='50px'
        bg='rgba(0,0,0,.3)'
        onClick={() => paginate(1)}
        cursor='pointer'
      >
        <ChevronRightIcon></ChevronRightIcon>
      </MotionCircle>
    </Box>
  )
}

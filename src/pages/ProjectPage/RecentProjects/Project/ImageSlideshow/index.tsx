import * as React from 'react'
import { Text, Box, Center, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import { AnimatePresence, PanInfo } from 'framer-motion'
import { MotionCircle, MotionImage } from '../../../../../utils/animations'
import { wrap } from '@popmotion/popcorn'

interface ImageSlideshowProps {
  images: any[]
}

export const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images }) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      rotate: direction > 0 ? 10 : -10,
      opacity: 0,
      height: 250,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotate: 0,
      height: 250,
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -500 : 500,
        rotate: direction > 0 ? -10 : 10,
        opacity: 0,
        height: 250,
      }
    },
  }

  const imageSrc = images.map((image) => image.asset.url)

  const [[page, direction], setPage] = React.useState([0, 0])

  const paginate = (direction: number) => {
    setPage([page + direction, direction])
  }

  const index = wrap(0, imageSrc.length, page)

  const dragEndFunc = (
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    console.log(offset.x)
    if (offset.x > 150) {
      paginate(-1)
    } else if (offset.x < -150) {
      paginate(1)
    }
  }

  const arrowBg = useColorModeValue('rgba(0,0,0,.3)', 'rgba(0,0,0,.3)')

  const [mobile] = useMediaQuery('(max-width: 450px)')

  return (
    <Box w='100%' d='flex' justifyContent='space-evenly' alignItems='center'>
      {/* chevronleft */}
      <MotionCircle
        p={4}
        size='50px'
        bg={arrowBg}
        onClick={() => paginate(-1)}
        cursor='pointer'
        hidden={mobile ? true : false}
      >
        <ChevronLeft></ChevronLeft>
      </MotionCircle>

      {/* image */}

      <Center h='250px' w={mobile ? '100%' : '450px'} flexDirection='column'>
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
        <Text color='gray.400' my={2} hidden={mobile ? false : true}>
          {' '}
          <ChevronLeft></ChevronLeft> Swipe for more <ChevronRight></ChevronRight>{' '}
        </Text>
      </Center>

      {/* chevronright */}
      <MotionCircle
        p={4}
        size='50px'
        bg='rgba(0,0,0,.3)'
        onClick={() => paginate(1)}
        cursor='pointer'
        hidden={mobile ? true : false}
      >
        <ChevronRight></ChevronRight>
      </MotionCircle>
    </Box>
  )
}

import * as React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'

export const ImageSlideshow = () => {
  const ChevronLeftIcon = () => <ChevronLeft style={{ fontSize: '2.5rem' }}></ChevronLeft>
  const ChevronRightIcon = () => <ChevronRight style={{ fontSize: '2.5rem' }}></ChevronRight>

  return (
    <Box w='100%' d='flex' justifyContent='space-evenly' alignItems='center'>
      {/* chevronleft */}
      <ChevronLeftIcon></ChevronLeftIcon>

      {/* image */}

      <Image w='60%' src='/images/project1.png' objectFit='contain' borderRadius='md'></Image>

      {/* chevronright */}
      <ChevronRightIcon></ChevronRightIcon>
    </Box>
  )
}

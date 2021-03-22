import * as React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { AnimatedTechButtons } from './AnimatedTechButtons'

export const TechStack = () => {
  return (
    <Box w='100%'>
      <Heading fontWeight='semibold' fontSize='lg' ml={4}>
        Tech-Stack / Skills:
      </Heading>
      <AnimatedTechButtons></AnimatedTechButtons>
    </Box>
  )
}

import * as React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { HeaderLinks } from './HeaderLinks'
import { ImageSlideshow } from './ImageSlideshow'
import { TechStack } from './TechStack'

export const Project = () => (
  <Box>
    <HeaderLinks></HeaderLinks>

    {/* project title */}
    <Box d='flex' justifyContent='center' m='2rem'>
      <Heading fontSize='2.2rem'>NHL Stats App</Heading>
    </Box>

    <ImageSlideshow></ImageSlideshow>

    {/* project description */}
    <Box d='flex' justifyContent='center' textAlign='center' m='2rem'>
      <Text fontSize={16}>
        A React client that uses a third-party API to fetch real jeopardy questions then runs a game
        against a CPU opponent.{' '}
      </Text>
    </Box>

    <TechStack></TechStack>
  </Box>
)

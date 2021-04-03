import * as React from 'react'
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { HeaderLinks } from './HeaderLinks'
import { ImageSlideshow } from './ImageSlideshow'
import { TechStack } from './TechStack'

interface ProjectProps {
  project: any
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
  const titleColor = useColorModeValue('myDark.500', 'myWhite.500')

  return (
    <Box>
      {/* project title */}
      <Box d='flex' color={titleColor} justifyContent='center' m='2rem'>
        <Heading fontSize='2.2rem'>NHL Stats App</Heading>
      </Box>

      {/* project description */}
      <Box d='flex' justifyContent='center' textAlign='center' m='2rem'>
        <Text fontSize={16}>
          A React client that uses a third-party API to fetch real jeopardy questions then runs a
          game against a CPU opponent.{' '}
        </Text>
      </Box>

      <TechStack project={project}></TechStack>

      <ImageSlideshow></ImageSlideshow>
      <HeaderLinks></HeaderLinks>
    </Box>
  )
}

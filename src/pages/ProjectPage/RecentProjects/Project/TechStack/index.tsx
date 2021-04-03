import * as React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { AnimatedTechButtons } from './AnimatedTechButtons'

interface TechStackProps {
  project: any
}

export const TechStack: React.FC<TechStackProps> = ({ project }) => {
  return (
    <Box w='100%'>
      <Heading fontWeight='semibold' fontSize='lg' ml={4}>
        Tech-Stack / Skills:
      </Heading>
      <AnimatedTechButtons project={project}></AnimatedTechButtons>
    </Box>
  )
}

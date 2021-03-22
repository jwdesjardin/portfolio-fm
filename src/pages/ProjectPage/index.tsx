import * as React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Greeting } from './Greeting'
import { RecentProjects } from './RecentProjects'

export const ProjectPage = () => (
  <Box>
    <Greeting></Greeting>
    <Container maxW='55rem'>
      <RecentProjects></RecentProjects>
    </Container>
  </Box>
)

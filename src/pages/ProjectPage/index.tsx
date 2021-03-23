import * as React from 'react'
import { Box, Container, HStack, Text } from '@chakra-ui/react'
import { Greeting } from './Greeting'
import { RecentProjects } from './RecentProjects'
import { ChevronRight } from '@material-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

export const ProjectPage = () => (
  <Box>
    <Greeting></Greeting>
    <Container maxW='55rem'>
      <RecentProjects></RecentProjects>

      {/* next page links */}
      <RouterLink to='/contact'>
        <HStack spacing={0} float='right' my={32} mb={16}>
          <Text maxW={20}>AboutMe / ContactMe</Text>
          <ChevronRight></ChevronRight>
        </HStack>
      </RouterLink>
    </Container>
  </Box>
)

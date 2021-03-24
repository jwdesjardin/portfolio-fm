import * as React from 'react'
import { Box, Container, HStack, Text } from '@chakra-ui/react'
import { Greeting } from './Greeting'
import { RecentProjects } from './RecentProjects'
import { ChevronRight } from '@material-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { shakeAnimation } from '../../utils/animations'

export const ProjectPage = () => {
  const MotionHStack = motion(HStack)
  return (
    <Box>
      <Greeting></Greeting>
      <Container maxW='55rem'>
        <RecentProjects></RecentProjects>

        {/* next page links */}
        <RouterLink to='/contact'>
          <MotionHStack spacing={0} float='right' my={24} mb={16} whileHover={shakeAnimation}>
            <Text maxW={20}>AboutMe / ContactMe</Text>
            <ChevronRight></ChevronRight>
          </MotionHStack>
        </RouterLink>
      </Container>
    </Box>
  )
}

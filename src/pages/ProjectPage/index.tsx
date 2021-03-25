import * as React from 'react'
import { Box, Container, HStack, Text } from '@chakra-ui/react'
import { Greeting } from './Greeting'
import { RecentProjects } from './RecentProjects'
import { ChevronRight } from '@material-ui/icons'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MotionBox, MotionHStack, shakeAnimation } from '../../utils/animations'

import { Element, animateScroll as scroll, scroller } from 'react-scroll'

export const ProjectPage = () => {
  const location = useLocation()

  React.useEffect(() => {
    if (location.hash === '#projects') {
      console.log('scrolling')
      scroller.scrollTo('projects', {
        duration: 1500,
        delay: 100,
        smooth: true,

        offset: 50, // Scrolls to element + 50 pixels down the page
      })
    } else {
      scroll.scrollTo(0, {
        // duration: 1500,
        // delay: 100,
        // smooth: true,
        // offset: 50, // Scrolls to element + 50 pixels down the page
      })
    }
  }, [location])

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Greeting></Greeting>
      <Container maxW='55rem'>
        <Element name='projects'></Element>
        <RecentProjects></RecentProjects>

        {/* next page links */}
        <RouterLink to='/contact#about'>
          <MotionHStack spacing={0} float='right' my={24} mb={16} whileHover={shakeAnimation}>
            <Text maxW={20}>AboutMe / ContactMe</Text>
            <ChevronRight></ChevronRight>
          </MotionHStack>
        </RouterLink>
      </Container>
    </MotionBox>
  )
}

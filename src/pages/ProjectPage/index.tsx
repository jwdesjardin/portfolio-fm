import * as React from 'react'
import { Container, Text } from '@chakra-ui/react'
import { Greeting } from './Greeting'
import { RecentProjects } from './RecentProjects'
import { ChevronRight } from '@material-ui/icons'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { MotionBox, MotionHStack, shakeAnimation } from '../../utils/animations'

import { Element as ScrollElement, animateScroll as scroll, scroller } from 'react-scroll'

export const ProjectPage = () => {
  const location = useLocation()

  React.useEffect(() => {
    if (location.hash === '#projects') {
      scroller.scrollTo('projects', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 50,
      })
    } else {
      scroll.scrollTo(0, {})
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
        <ScrollElement name='projects'></ScrollElement>
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

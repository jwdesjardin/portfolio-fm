import * as React from 'react'
import { Text, Container, Heading, Image, Center, useColorModeValue } from '@chakra-ui/react'

import { AboutMeSection } from './AboutMeSection'
import { ContactLinks } from './ContactLinks'
import { ChevronLeft } from '@material-ui/icons'

import { Link as RouterLink, useLocation } from 'react-router-dom'
import { MotionBox, MotionHStack, shakeAnimation } from '../../utils/animations'

import { Element, scroller } from 'react-scroll'

export const ContactPage = () => {
  const location = useLocation()
  console.log(location)

  React.useEffect(() => {
    if (location.hash === '#about') {
      console.log('scrolling')
      scroller.scrollTo('about', {
        duration: 1500,
        delay: 100,
        smooth: true,
      })
    }
    if (location.hash === '#links') {
      console.log('scrolling')
      scroller.scrollTo('links', {
        duration: 1500,
        delay: 100,
        smooth: true,

        offset: 50,
      })
    }
  }, [location])

  const titleColor = useColorModeValue('myDark.500', 'myWhite.500')

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Container maxW='55rem'>
        {/* Page header */}
        <Element name='about'></Element>
        <Heading id='about' fontSize={52} textAlign='center' py='10rem' color={titleColor}>
          About Me
        </Heading>

        <AboutMeSection></AboutMeSection>

        <Center mt='10rem'>
          <Image borderRadius='md' w='35%' minW='250px' src='/images/profile-pic.jpg'></Image>
        </Center>

        <Element name='links'></Element>
        <ContactLinks></ContactLinks>

        {/* next page links */}
        <RouterLink to='/#projects'>
          <MotionHStack
            spacing={0}
            float='left'
            my={16}
            whileHover={{ ...shakeAnimation, color: '#1090f9' }}
          >
            <ChevronLeft></ChevronLeft>
            <Text maxW={20}>Projects</Text>
          </MotionHStack>
        </RouterLink>
      </Container>
    </MotionBox>
  )
}

import * as React from 'react'
import {
  Text,
  Container,
  Heading,
  Image,
  Center,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'

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

  const sectionText = `When I decided to fully pursue software engineering I scoured the internet for the best
  bootcamps and courses out there and found Udemy courses to be offering an great value. I knew
  I wanted to dedicate myself solely to web development and I bought courses from the
  instructors that I felt were able to get me the highest quality and most current material.
  That led me to a very popular online bootcamp by Colt Steele. This gave me a great overview of
  frontend and backend development. I learned modern HTML, CSS, JavaScript, Node.js, Express and
  EJS Templating. As I was going through this tutorial and soaking up everything I could I found
  another instructor on Udemy and also Youtube by the name of Brad Traversy. I started watching
  all of of his YouTube videos and really build a strong toolbox for web development off of his
  Udemy courses Modern HTML & CSS From The Beginning (Including Sass), Modern JavaScript From
  The Beginning, & React Front To Back.`

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

        <VStack spacing='10rem'>
          <AboutMeSection sectionText={sectionText} sectionTitle='Education'></AboutMeSection>
          <AboutMeSection sectionText={sectionText} sectionTitle='Projects'></AboutMeSection>
          <AboutMeSection
            sectionText={sectionText}
            sectionTitle='Goals / Interests'
          ></AboutMeSection>
        </VStack>

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

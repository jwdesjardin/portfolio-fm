import * as React from 'react'
import { Text, Container, Heading, Image, Center, VStack, HStack } from '@chakra-ui/react'

import { AboutMeSection } from './AboutMeSection'
import { ContactLinks } from './ContactLinks'
import { ChevronLeft } from '@material-ui/icons'

import { Link as RouterLink } from 'react-router-dom'
import { MotionHStack, shakeAnimation } from '../../utils/animations'

export const ContactPage = () => {
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

  return (
    <Container maxW='55rem'>
      {/* Page header */}
      <Heading fontSize={52} textAlign='center' py='10rem'>
        About Me
      </Heading>

      <VStack spacing='10rem'>
        <AboutMeSection sectionText={sectionText} sectionTitle='Education'></AboutMeSection>
        <AboutMeSection sectionText={sectionText} sectionTitle='Projects'></AboutMeSection>
        <AboutMeSection sectionText={sectionText} sectionTitle='Goals / Interests'></AboutMeSection>
      </VStack>

      <Center mt='10rem'>
        <Image w='35%' src='/images/profile-pic.jpg'></Image>
      </Center>

      <ContactLinks></ContactLinks>

      {/* next page links */}
      <RouterLink to='/'>
        <MotionHStack spacing={0} float='left' my={16} whileHover={shakeAnimation}>
          <ChevronLeft></ChevronLeft>
          <Text maxW={20}>Projects</Text>
        </MotionHStack>
      </RouterLink>
    </Container>
  )
}

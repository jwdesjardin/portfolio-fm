import * as React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { SectionHeader } from '../../../utils/layout/SectionHeader'

export const AboutMeSection = () => (
  <VStack spacing='10rem'>
    {/* education */}
    <Box w='100%'>
      <Box w='100%' mb='4rem'>
        <SectionHeader>Education</SectionHeader>
      </Box>

      <Box fontSize={16} lineHeight='1.7'>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0' }}>
          I would consider myself a self taught programmer. I have found that by following my own
          intellectual curiosity and by building the things that i find interesting i have been able
          to learn a lot about how to build web applications.
        </p>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0' }}>
          I do have work experience prior to learning to program. I was a retail manager with
          Nordstrom for the last five years among other jobs. There i got the opportunity to strech
          out and learn a lot in the business world. I got to do a lot of cool stuff in this job I
          was continuing to move up to more challenging postions but i decided to leave my postion
          in 2020 because i felt like it was a good move for myself to pick a career that would
          align with my passions and leave me feeling maximum fulfillment. Since then programming
          has proven to be a great creative outlet for me, It has given me a great framework to pick
          apart and sovle problems and it keeps me excited to learn something new each day. I am
          very happy with the decision to follow my passions and only want to continue learning.
        </p>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0' }}>
          When teaching myself new programming skills I use various resources across the internet. I
          use tutorials if I want to get into a new subject I have no familiarity with. I use the
          Documentation that is often provided for major projects to remeber how things work
          together. I also read code often on Github to see how someone else has solved the same
          problem that I have.{' '}
        </p>
      </Box>
    </Box>
    {/* projects */}
    <Box w='100%'>
      <Box w='100%' mb='4rem'>
        <SectionHeader>Projects</SectionHeader>
      </Box>

      <Box fontSize={16} lineHeight='1.7'>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0' }}>
          In between taking tutorials and learning new topics i took breaks and built projects on my
          own without using anything other than documention and the internet to get through any
          errors or problems i faced.
        </p>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0' }}>
          My earliest projects that are shown on this portfolio are from the treehouse techdegree
          that i did. These projects mostly focused on using the basics of javascript. Then they
          moved on to the basics of Node.js and Express and the Sequalize ORM to create a server and
          database and the moved on to the basics of React all culminating in a final project that
          was a full-stack React project allowing full CRUD support to the user. These projects gave
          me confindence to build things and share my work with other sutdents that were also
          learning. These projects gave me an opportunity to solve bugs on my own and even solve the
          bugs of classmates.
        </p>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0' }}>
          The next projects was my first set of Full Stack Projects. These projects were focused
          around learning on my own without the use of tutorials. I learned a lot a lot about how to
          create a project on my own. I learned about styling proejcts and learned and tested a lot
          of different CSS systems like SASS, CSS Modules, Styled Components. I learned different
          state management libraries like redux and the context API. I also learned delpoyment the
          difference between delpoyng a react app vs fullstack app with a server or a database. I
          also learned Next.js and how to generate static pages using this framework. At the end of
          this i felt the confidence of being able to build things with mastery being able to adjust
          things to the pixel and get things exaclty as i want it.
        </p>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0' }}>
          The last group of projects that i did were Typescript projects. I continued to build upon
          my planning skills and began using the Framer app to mockup each project. I settled on
          using Chakra UI library to create my UI and have been really enjoying a lot of the
          shortcuts that it offers. I have used Typescript in all of these projects and love it. I
          learned to decalre my own types, to use interfaces for react components also reading type
          def files and using them in the code editor keeps me from needing to go the Docs as much.
          My project organization was a focus of these projects as well using High Order Components
          to DRY up my code. I learned the animations framework Framer Motion to add animations
          ranging from simple fade-ins on the react-router components to a gesture on hover or click
          or animating the apperace of modals and slideshow images.
        </p>
      </Box>
    </Box>
    {/* goals interests */}
    <Box w='100%'>
      <Box w='100%' mb='4rem'>
        <SectionHeader>Goals / Interests</SectionHeader>
      </Box>

      <Box fontSize={16} lineHeight='1.7'>
        <p style={{ textIndent: '2rem', margin: '3rem 0' }}>
          I want to continue to learn new technologies. If no one told me what to learn next i would
          probably go towards mobile app maybe using something like react Native if not Swift or
          Kotlin. I would probably also continue to learn about servers and hosting and deployment.
          Maybe even pick up a new backend language. In addition to this i want to continute to
          develop my problem solving skills. I enjoy being able to solve more and more challenging
          problems. I also really enjoy the planning / architecting of projects. In the long term i
          would love to be able to build understand the architecture of all types of software.
        </p>
      </Box>
    </Box>
  </VStack>
)

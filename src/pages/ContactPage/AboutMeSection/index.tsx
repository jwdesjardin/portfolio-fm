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
        <p style={{ textIndent: '2rem', margin: '1.5rem 0', textAlign: 'justify' }}>
          I consider myself a self taught programmer. I chose to take advantage of the online
          resources available to me and to learn at my own pace. I have found this to be a very
          exciting way to learn and that by following my own curiosity and by building projects that
          I am interested in I have been able to learn a lot about how to build a quality web
          application.
        </p>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0', textAlign: 'justify' }}>
          I do have work experience prior to learning to program. Most recently I was a people
          manager with a popular retail store. In this position I was able to gain a lot of business
          as well as people skills and also learn a lot aboout the retail, sales, and coorporate
          world. I really enjoyed this job and was continuing to get opportunities to take on more
          challenging postions but I decided to leave my postion in 2020 because I felt like it was
          going to be a great move in the long run for me to restart in a career that would align
          with my passions and leave me feeling maximum fulfillment from my work. Since then
          programming has proven to be a great fit for me in many ways. Programming is a great
          creative outlet for me, It has given me a great framework to pick apart and solve problems
          and it keeps me excited to learn something new each day. I am very happy with the decision
          to follow my passions and only want to continue learning.
        </p>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0', textAlign: 'justify' }}>
          When teaching myself new programming skills I use all the resoureces that are available to
          me but there are a few methods that are most notable. I use video tutorials if I want to
          get into a new subject I have no familiarity with. I use the documentation that is often
          provided by the developers for major projects to really get to know a subject deeper or as
          a quick refrence when programming. I also find it important to read code from real life
          projects, most often on Github, to see how someone else has solved the same problem that I
          have or just to get a feel for what else is out there in the world of code .
        </p>
      </Box>
    </Box>
    {/* projects */}
    <Box w='100%'>
      <Box w='100%' mb='4rem'>
        <SectionHeader>Projects</SectionHeader>
      </Box>

      <Box fontSize={16} lineHeight='1.7'>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0', textAlign: 'justify' }}>
          In between learning new topics I took breaks and build projects on my own without using
          anything other outside resources other than documention or internet searches to get
          through any errors or bugs I face.
        </p>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0', textAlign: 'justify' }}>
          My earliest projects that are shown on this portfolio are from the Treehouse Techdegree
          that I completed in 2020. The first of these projects focus on the basics of JavaScript.
          Then they move on to the basics of Node.js and Express and the Sequalize ORM to create
          servers, REST APIs and SQL databases. The last projects brought React in to the toolbox to
          create a full-stack project allowing full CRUD support to the user. These projects took me
          from just knowing about code to having the confindence to build things and share my work
          with other students. I also got the opportunity to solve bugs in projects of growing
          complexity and even solve the bugs of classmates.
        </p>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0', textAlign: 'justify' }}>
          The next group of projects I created in this portfolio was what I call my first set of
          full-stack projects. This was my Spotify API App, my Ecommerce App and V1 of my portfolio.
          These projects were completed after graduation from the Treehouse Tech-Degree program and
          were focused around learning on my own without the use of tutorials or courses. I learned
          a lot a lot about how to create a project on my own. I learned about styling projects and
          using different CSS systems like SASS, CSS Modules and Styled Components. I learned
          different state management libraries and used Redux as well as the Context API in
          projects. I also learned about deployment the different complexities of delpoying a React
          app vs full-stack app with a server or a database. I also worked with Next.js utilizing
          the static site generation feature of this framework. At the end of these projects I felt
          a lot confidence of being able to build real world applications on my own but I still
          wanted to take my coding workflow to the next level.
        </p>
        <p style={{ textIndent: '2rem', margin: '1.5rem 0', textAlign: 'justify' }}>
          The most recent group of projects that I completed were my Typescript projects. In these
          projects I focused on imporving my coding workflow by adding the use of Typescript as well
          as a consistent UI libarry and mockup service for all the projects. For a mockup service I
          used the Framer.com app to mockup each project that I did and this was a huge game changer
          in making the development process much smoother. For a UI library I chose to use the
          Chakra library and have been really enjoying a lot of the shortcuts that it offers. Using
          TypeScript, I learned to decalre my own types, to use interfaces for React components also
          reading type definition files of projects that I install from npm. Typescript all around
          catches more errors, allows me to develop features quicker and allows me to learn more
          about third party libaries while staying in my code editor. My projects became more
          organized in this group of projects and I was able to start writing better components that
          could be reused throughout the project to DRY up my code.
        </p>
      </Box>
    </Box>
  </VStack>
)

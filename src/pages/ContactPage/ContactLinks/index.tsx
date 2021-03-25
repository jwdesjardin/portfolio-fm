import * as React from 'react'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
import { Email, GitHub, LinkedIn, Twitter } from '@material-ui/icons'

import { Link as RouterLink } from 'react-router-dom'
import { MotionBox, shakeAnimation } from '../../../utils/animations'

export const ContactLinks = () => (
  <Center h='100vh' id='links'>
    <Center flexDirection='column'>
      <Heading fontSize={46} my='4rem' textAlign='center'>
        Get In Touch
      </Heading>

      <Box w='80%'>
        <RouterLink to=''>
          <MotionBox d='flex' justifyContent='center' alignItems='center' my='2rem'>
            <MotionBox whileHover={{ ...shakeAnimation, color: '#333' }}>
              <GitHub style={{ fontSize: '2.5rem' }}></GitHub>
            </MotionBox>
            <Text ml='2rem' w='14rem' textAlign='center'>
              Check out My Github
            </Text>
          </MotionBox>
        </RouterLink>
        <RouterLink to=''>
          <MotionBox d='flex' justifyContent='center' alignItems='center' my='2rem'>
            <MotionBox whileHover={{ ...shakeAnimation, color: '#ff9f1c' }}>
              <Email style={{ fontSize: '2.5rem' }}></Email>
            </MotionBox>
            <Text ml='2rem' w='14rem' textAlign='center'>
              Send me an Email
            </Text>
          </MotionBox>
        </RouterLink>
        <RouterLink to=''>
          <MotionBox d='flex' justifyContent='center' alignItems='center' my='2rem'>
            <MotionBox whileHover={{ ...shakeAnimation, color: '#2867B2' }}>
              <LinkedIn style={{ fontSize: '2.5rem' }}></LinkedIn>
            </MotionBox>
            <Text ml='2rem' w='14rem' textAlign='center'>
              Contact me on LinkedIn
            </Text>
          </MotionBox>
        </RouterLink>
        <RouterLink to=''>
          <MotionBox d='flex' justifyContent='center' alignItems='center' my='2rem'>
            <MotionBox whileHover={{ ...shakeAnimation, color: '#1DA1F2' }}>
              <Twitter style={{ fontSize: '2.5rem' }}></Twitter>
            </MotionBox>

            <Text ml='2rem' w='14rem' textAlign='center'>
              Message me on Twitter
            </Text>
          </MotionBox>
        </RouterLink>
      </Box>
    </Center>
  </Center>
)

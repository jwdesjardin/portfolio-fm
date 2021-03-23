import * as React from 'react'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
import { Email, GitHub, LinkedIn, Twitter } from '@material-ui/icons'

import { Link as RouterLink } from 'react-router-dom'

export const ContactLinks = () => (
  <Center h='100vh'>
    <Center flexDirection='column'>
      <Heading fontSize={46} my='4rem' textAlign='center'>
        Get In Touch
      </Heading>

      <Box w='80%'>
        <RouterLink to=''>
          <Box d='flex' justifyContent='center' alignItems='center' my='2rem'>
            <GitHub style={{ fontSize: '2.5rem' }}></GitHub>
            <Text ml='2rem' w='14rem' textAlign='center'>
              Check out My Github
            </Text>
          </Box>
        </RouterLink>
        <RouterLink to=''>
          <Box d='flex' justifyContent='center' alignItems='center' my='2rem'>
            <Email style={{ fontSize: '2.5rem' }}></Email>
            <Text ml='2rem' w='14rem' textAlign='center'>
              Send me an Email
            </Text>
          </Box>
        </RouterLink>
        <RouterLink to=''>
          <Box d='flex' justifyContent='center' alignItems='center' my='2rem'>
            <LinkedIn style={{ fontSize: '2.5rem' }}></LinkedIn>
            <Text ml='2rem' w='14rem' textAlign='center'>
              Contact me on LinkedIn
            </Text>
          </Box>
        </RouterLink>
        <RouterLink to=''>
          <Box d='flex' justifyContent='center' alignItems='center' my='2rem'>
            <Twitter style={{ fontSize: '2.5rem' }}></Twitter>
            <Text ml='2rem' w='14rem' textAlign='center'>
              Message me on Twitter
            </Text>
          </Box>
        </RouterLink>
      </Box>
    </Center>
  </Center>
)

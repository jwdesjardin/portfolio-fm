import * as React from 'react'
import { Box } from '@chakra-ui/react'
import { GreetingText } from './GreetingText'

export const Greeting = () => (
  <Box
    h='100vh'
    w='75%'
    m='auto'
    d='flex'
    flexDirection='column'
    alignContent='center'
    justifyContent='center'
  >
    <Box fontSize={64} fontWeight='bold'>
      <GreetingText>My name is</GreetingText>
      <GreetingText>Joey Desjardin.</GreetingText>
      <GreetingText>I am a full-stack</GreetingText>
      <GreetingText>Software Engineer.</GreetingText>
      <GreetingText>This is my portfolio.</GreetingText>
    </Box>
  </Box>
)

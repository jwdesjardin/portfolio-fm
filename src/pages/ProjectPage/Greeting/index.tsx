import * as React from 'react'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { GreetingText } from './GreetingText'
import { MotionBox } from '../../../utils/animations'

export const Greeting = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)')
  return (
    <Box h='100vh' d='flex' flexDirection='column' alignContent='center' justifyContent='center'>
      <MotionBox
        fontWeight='bold'
        initial={{ x: 0 }}
        animate={{ x: mobile ? '10%' : '20%' }}
        w='90%'
      >
        <GreetingText>My name is</GreetingText>
        <GreetingText>Joey Desjardin.</GreetingText>
        <GreetingText>I am a full-stack</GreetingText>
        <GreetingText>Software Engineer.</GreetingText>
        <GreetingText>This is my portfolio.</GreetingText>
      </MotionBox>
    </Box>
  )
}

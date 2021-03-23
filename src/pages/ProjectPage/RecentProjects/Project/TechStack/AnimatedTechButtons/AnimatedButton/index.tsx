import * as React from 'react'
import { Center, Circle, Text } from '@chakra-ui/react'
import { KeyboardArrowDown } from '@material-ui/icons'

export const AnimatedButton = () => {
  const ChevronDownIcon = () => (
    <KeyboardArrowDown style={{ fontSize: '1.2rem' }}></KeyboardArrowDown>
  )
  return (
    <Circle size='125px' bg='white' color='black'>
      <Center flexDirection='column'>
        <Text fontWeight='semibold'>Typescript</Text>
        <ChevronDownIcon></ChevronDownIcon>
      </Center>
    </Circle>
  )
}

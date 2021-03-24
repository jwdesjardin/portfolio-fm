import * as React from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { GitHub, Web } from '@material-ui/icons'
import { motion } from 'framer-motion'
import { shakeAnimation } from '../../../../../utils/animations'

export const HeaderLinks = () => {
  const WebIcon = () => <Web style={{ fontSize: '2.2rem', color: 'yellow' }}></Web>
  const GithubIcon = () => <GitHub style={{ fontSize: '2.2rem', color: 'green' }}></GitHub>

  const MotionVStack = motion(VStack)

  return (
    <Box d='flex' alignItems='center' justifyContent='space-between' ml={4} mt={6}>
      {/* border */}
      <Box borderBottom='dotted white 14px' w='80%'></Box>

      <HStack spacing={4}>
        {/* demo icon */}
        <MotionVStack
          spacing={0}
          whileHover={shakeAnimation}
          p={2}
          boxShadow='0px 0px 2px 0px yellow'
          borderRadius='md'
        >
          <WebIcon></WebIcon>
          <Text fontSize={13} color='yellow'>
            DEMO
          </Text>
        </MotionVStack>

        {/* github icon */}
        <MotionVStack
          spacing={0}
          whileHover={shakeAnimation}
          p={2}
          boxShadow='0px 0px 2px 0px green'
          borderRadius='md'
        >
          <GithubIcon></GithubIcon>
          <Text fontSize={13} color='green'>
            REPO
          </Text>
        </MotionVStack>
      </HStack>
    </Box>
  )
}

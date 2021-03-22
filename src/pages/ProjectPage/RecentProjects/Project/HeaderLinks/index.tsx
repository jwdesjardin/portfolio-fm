import * as React from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { GitHub, Web } from '@material-ui/icons'

export const HeaderLinks = () => {
  const WebIcon = () => <Web style={{ fontSize: '2.2rem', color: 'yellow' }}></Web>
  const GithubIcon = () => <GitHub style={{ fontSize: '2.2rem', color: 'green' }}></GitHub>

  return (
    <Box d='flex' alignItems='center' justifyContent='space-between' ml={4}>
      {/* border */}
      <Box borderBottom='dotted white 14px' w='80%'></Box>

      <HStack spacing={4}>
        {/* demo icon */}
        <VStack>
          <WebIcon></WebIcon>
          <Text fontSize={13} color='yellow'>
            DEMO
          </Text>
        </VStack>

        {/* github icon */}
        <VStack>
          <GithubIcon></GithubIcon>
          <Text fontSize={13} color='green'>
            REPO
          </Text>
        </VStack>
      </HStack>
    </Box>
  )
}

import * as React from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { GitHub, Web } from '@material-ui/icons'
import { motion } from 'framer-motion'
import { shakeAnimation } from '../../../../../utils/animations'
import { Link as RouterLink } from 'react-router-dom'

interface HeaderLinksProps {
  demoLink: string
  ghLink: string
}

export const HeaderLinks = ({ demoLink, ghLink }) => {
  const WebIcon = () => <Web style={{ fontSize: '2.2rem' }}></Web>
  const GithubIcon = () => <GitHub style={{ fontSize: '2.2rem' }}></GitHub>

  const MotionVStack = motion(VStack)

  return (
    <Box d='flex' alignItems='center' justifyContent='space-between' ml={4} mt={6}>
      {/* border */}
      <Box borderBottom='dotted 14px' w='100%' mr={4}></Box>

      <HStack spacing={4}>
        {/* demo icon */}
        <a target='_blank' rel='noreferrer' href={demoLink}>
          <MotionVStack
            spacing={0}
            whileHover={shakeAnimation}
            p={2}
            boxShadow='0px 0px 2px 0px'
            borderRadius='md'
            color='myOrange.500'
          >
            <WebIcon></WebIcon>
            <Text fontSize={13}>DEMO</Text>
          </MotionVStack>
        </a>

        {/* github icon */}
        <a target='_blank' rel='noreferrer' href={ghLink}>
          <MotionVStack
            spacing={0}
            whileHover={shakeAnimation}
            p={2}
            boxShadow='0px 0px 2px 0px'
            borderRadius='md'
            color='myGreen.500'
          >
            <GithubIcon></GithubIcon>
            <Text fontSize={13}>REPO</Text>
          </MotionVStack>
        </a>
      </HStack>
    </Box>
  )
}

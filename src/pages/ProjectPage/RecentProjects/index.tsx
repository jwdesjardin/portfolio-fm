import * as React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { SectionHeader } from '../../../utils/layout/SectionHeader'
import { Project } from './Project'

export const RecentProjects = () => (
  <Box>
    <VStack spacing={24}>
      <div id='projects'></div>
      <SectionHeader>Recent Projects</SectionHeader>

      <Project></Project>
      <Project></Project>
      <Project></Project>
    </VStack>
  </Box>
)

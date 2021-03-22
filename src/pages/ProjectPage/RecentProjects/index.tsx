import * as React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { SectionHeader } from '../../../utils/layout/SectionHeader'
import { Project } from './Project'

export const RecentProjects = () => (
  <Box>
    <SectionHeader></SectionHeader>
    <VStack spacing={32}>
      <Project></Project>
      <Project></Project>
      <Project></Project>
    </VStack>
  </Box>
)

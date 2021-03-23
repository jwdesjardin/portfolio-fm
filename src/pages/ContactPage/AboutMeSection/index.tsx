import * as React from 'react'
import { Text, Box } from '@chakra-ui/react'
import { SectionHeader } from '../../../utils/layout/SectionHeader'

interface AboutMeSectionProps {
  sectionTitle: string
  sectionText: string
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({ sectionTitle, sectionText }) => (
  <Box>
    <Box mb='4rem'>
      <SectionHeader>{sectionTitle}</SectionHeader>
    </Box>

    <Text fontSize={16} px={10} textAlign='justify' lineHeight='2'>
      <p style={{ textIndent: '2rem' }}>{sectionText}</p>
    </Text>
  </Box>
)

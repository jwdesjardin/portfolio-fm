import * as React from 'react'
import { Box } from '@chakra-ui/react'
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

    <Box fontSize={16} px={10} lineHeight='2'>
      <p style={{ textIndent: '2rem', textAlign: 'justify' }}>{sectionText}</p>
    </Box>
  </Box>
)

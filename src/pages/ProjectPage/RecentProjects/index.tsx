import * as React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { SectionHeader } from '../../../utils/layout/SectionHeader'
import { Project } from './Project'
import { getProjectData } from '../../../queries'

export const RecentProjects = () => {
  // bring in project data

  const [project, setProject] = React.useState()

  React.useEffect(() => {
    getProjectData().then((data) => setProject(data))
  }, [])

  return (
    <Box>
      <div id='projects'></div>
      <VStack spacing={20}>
        <SectionHeader>Recent Projects</SectionHeader>

        {/* this is where project data will be brought in from the backend */}

        <Project project={project}></Project>
        <Project project={project}></Project>
        <Project project={project}></Project>
      </VStack>
    </Box>
  )
}

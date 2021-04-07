import * as React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { SectionHeader } from '../../../utils/layout/SectionHeader'
import { Project } from './Project'
import { getProjectsData } from '../../../queries'

export const RecentProjects = () => {
  // bring in project data

  const [projects, setProjects] = React.useState([])

  // this is where project data will be brought in from the backend
  React.useEffect(() => {
    getProjectsData().then((data) => setProjects(data))
  }, [])

  return (
    <Box>
      <div id='projects'></div>
      <VStack spacing={20}>
        <SectionHeader>Recent Projects</SectionHeader>

        {projects &&
          projects.map((project, idx) => <Project key={idx} project={project}></Project>)}
      </VStack>
    </Box>
  )
}

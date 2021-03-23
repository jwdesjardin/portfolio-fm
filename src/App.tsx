import * as React from 'react'
// import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

import { Route, Switch } from 'react-router-dom'
import { ProjectPage } from './pages/ProjectPage'
import { ContactPage } from './pages/ContactPage'
import { Box } from '@chakra-ui/react'
import { Nav } from './utils/Nav'

export const App = () => (
  <>
    <Box position='fixed' top={0} w='98%' d='flex' justifyContent='space-between'>
      <ColorModeSwitcher></ColorModeSwitcher>
      <Nav></Nav>
    </Box>

    <Switch>
      <Route exact path='/' component={ProjectPage}></Route>
      <Route path='/contact' component={ContactPage}></Route>
    </Switch>
  </>
)

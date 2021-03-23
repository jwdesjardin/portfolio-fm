import * as React from 'react'
// import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

import { Route, Switch } from 'react-router-dom'
import { ProjectPage } from './pages/ProjectPage'
import { ContactPage } from './pages/ContactPage'
import { Box } from '@chakra-ui/react'

export const App = () => (
  <>
    <Box position='absolute'>
      <ColorModeSwitcher></ColorModeSwitcher>
    </Box>

    <Switch>
      <Route exact path='/' component={ProjectPage}></Route>
      <Route path='/contact' component={ContactPage}></Route>
    </Switch>
  </>
)

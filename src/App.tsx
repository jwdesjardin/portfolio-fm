import * as React from 'react'
// import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react'
// import { ColorModeSwitcher } from './ColorModeSwitcher'

import { Route, Switch } from 'react-router-dom'
import { ProjectPage } from './pages/ProjectPage'
import { ContactPage } from './pages/ContactPage'

export const App = () => (
  <Switch>
    <Route exact path='/' component={ProjectPage}></Route>
    <Route path='/contact' component={ContactPage}></Route>
  </Switch>
)

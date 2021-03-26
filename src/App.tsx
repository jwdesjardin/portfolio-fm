import * as React from 'react'
// import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

import { Route, Switch, useLocation } from 'react-router-dom'
import { ProjectPage } from './pages/ProjectPage'
import { ContactPage } from './pages/ContactPage'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { Nav } from './utils/Nav'
import { AnimatePresence } from 'framer-motion'

export const App = () => {
  const location = useLocation()

  const bg = useColorModeValue('myPlatinum.500', 'myDark.500')

  return (
    <Box>
      <Box position='fixed' top={0} w='99vw' bg={bg} d='flex' justifyContent='space-between'>
        <ColorModeSwitcher></ColorModeSwitcher>
        <Nav></Nav>
      </Box>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={ProjectPage}></Route>
          <Route path='/contact' component={ContactPage}></Route>
        </Switch>
      </AnimatePresence>
    </Box>
  )
}

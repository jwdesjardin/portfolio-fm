import * as React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { AccountCircle, Email, Home, Menu, Web } from '@material-ui/icons'
import { NavLink } from './NavLink'

export const Nav = () => {
  const [isToggled, setIsToggled] = React.useState(false)

  return (
    <>
      <Center bg={isToggled ? 'lightgray' : ''} p={2} m={2} borderRadius='md'>
        <Menu onClick={() => setIsToggled(!isToggled)}></Menu>
      </Center>

      {/* dropdown */}
      {isToggled && (
        <Box bg='lightgrey' position='absolute' right={2} top='48px' borderRadius='md'>
          {/* nav button */}
          <NavLink>
            <Home style={{ marginRight: '1rem' }}></Home>
            Home
          </NavLink>
          <NavLink>
            <Web style={{ marginRight: '1rem' }}></Web>
            Projects
          </NavLink>
          <NavLink>
            <AccountCircle style={{ marginRight: '1rem' }}></AccountCircle>
            About Me
          </NavLink>
          <NavLink>
            <Email style={{ marginRight: '1rem' }}></Email>
            Contact
          </NavLink>
        </Box>
      )}
    </>
  )
}

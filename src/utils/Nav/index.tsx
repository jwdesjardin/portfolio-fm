import * as React from 'react'

import { AccountCircle, Email, Home, Menu, Web } from '@material-ui/icons'
import { NavLink } from './NavLink'
import { MotionBox, MotionCenter } from '../animations'
import { AnimatePresence } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { useColorModeValue, useMediaQuery } from '@chakra-ui/react'

export const Nav = () => {
  const [isToggled, setIsToggled] = React.useState(false)

  const menuVariants = {
    initial: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.15,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
        when: 'afterChildren',
      },
    },
  }

  const linksVariants = {
    initial: { opacity: 0, x: -100 },
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -100 },
  }

  const [mobile] = useMediaQuery('(max-width: 400px)')
  const bg = useColorModeValue('myDark.500', 'myPlatinum.500')

  return (
    <>
      <MotionCenter
        bg={isToggled ? 'myGray.600' : ''}
        p={2}
        m={2}
        borderRadius='md'
        whileHover={{ backgroundColor: 'rgba(100, 100, 100, .2)' }}
        transition={{ duration: 0.7 }}
        cursor='pointer'
      >
        <Menu onClick={() => setIsToggled(!isToggled)}></Menu>
      </MotionCenter>

      {/* dropdown */}
      <AnimatePresence>
        {isToggled && (
          <MotionBox
            position='absolute'
            right={2}
            top='50px'
            borderRadius='md'
            variants={menuVariants}
            initial='initial'
            animate='open'
            exit='closed'
            d='flex'
            flexDirection={mobile ? 'row' : 'column'}
            flexWrap='wrap'
            bg={bg}
            ml={2}
          >
            <RouterLink to='/#home'>
              <MotionBox variants={linksVariants} color='myBlue.500' key={5}>
                <NavLink>
                  <Home style={{ marginRight: '1rem' }}></Home>
                  Home
                </NavLink>
              </MotionBox>
            </RouterLink>

            <RouterLink to='/#projects'>
              <MotionBox variants={linksVariants} color='myPurple.500' key={2}>
                <NavLink>
                  <Web style={{ marginRight: '1rem' }}></Web>
                  Projects
                </NavLink>
              </MotionBox>
            </RouterLink>

            <RouterLink to='/contact#about'>
              <MotionBox variants={linksVariants} color='myOrange.500' key={3}>
                <NavLink>
                  <AccountCircle style={{ marginRight: '1rem' }}></AccountCircle>
                  About Me
                </NavLink>
              </MotionBox>
            </RouterLink>

            <RouterLink to='/contact#links'>
              <MotionBox variants={linksVariants} color='myGreen.500' key={4}>
                <NavLink>
                  <Email style={{ marginRight: '1rem' }}></Email>
                  Contact
                </NavLink>
              </MotionBox>
            </RouterLink>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  )
}

import * as React from 'react'

import { AccountCircle, Email, Home, Menu, Web } from '@material-ui/icons'
import { NavLink } from './NavLink'
import { MotionBox, MotionCenter } from '../animations'
import { AnimatePresence } from 'framer-motion'

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

  return (
    <>
      <MotionCenter
        bg={isToggled ? 'lightgray' : ''}
        p={2}
        m={2}
        borderRadius='md'
        whileHover={{ backgroundColor: '#bdbdbd' }}
        cursor='pointer'
      >
        <Menu onClick={() => setIsToggled(!isToggled)}></Menu>
      </MotionCenter>

      {/* dropdown */}
      <AnimatePresence>
        {isToggled && (
          <MotionBox
            bg='grey'
            position='absolute'
            right={2}
            top='48px'
            borderRadius='md'
            variants={menuVariants}
            initial='initial'
            animate='open'
            exit='closed'
          >
            <MotionBox variants={linksVariants} color='#067BDB' key={5}>
              <NavLink>
                <Home style={{ marginRight: '1rem' }}></Home>
                Home
              </NavLink>
            </MotionBox>

            <MotionBox variants={linksVariants} color='#8a2cc9' key={2}>
              <NavLink>
                <Web style={{ marginRight: '1rem' }}></Web>
                Projects
              </NavLink>
            </MotionBox>

            <MotionBox variants={linksVariants} color='#ff9f1c' key={3}>
              <NavLink>
                <AccountCircle style={{ marginRight: '1rem' }}></AccountCircle>
                About Me
              </NavLink>
            </MotionBox>

            <MotionBox variants={linksVariants} color='#2ec486' key={4}>
              <NavLink>
                <Email style={{ marginRight: '1rem' }}></Email>
                Contact
              </NavLink>
            </MotionBox>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  )
}

import * as React from 'react'
import { Center, Grid } from '@chakra-ui/react'

import { AnimatedButton } from './AnimatedButton'
import { CustomModal } from './CustomModal'
import { AnimatePresence, motion } from 'framer-motion'

export const AnimatedTechButtons = () => {
  const [openModal, setOpenModal] = React.useState('')

  const MotionCenter = motion(Center)
  const MotionGrid = motion(Grid)

  return (
    <MotionCenter w='100%' h='330px' layout>
      <AnimatePresence>
        {openModal === '' && (
          <MotionGrid gridGap={5} gridTemplateColumns='repeat(2, 1fr)' layout>
            {/* box #1 */}
            <AnimatedButton
              animateLocation='top-left'
              setOpenModal={setOpenModal}
              index={0}
            ></AnimatedButton>
            {/* box #2 */}
            <AnimatedButton
              animateLocation='top-right'
              setOpenModal={setOpenModal}
              index={1}
            ></AnimatedButton>
            {/* box #3 */}
            <AnimatedButton
              animateLocation='bottom-left'
              setOpenModal={setOpenModal}
              index={2}
            ></AnimatedButton>
            {/* box #4 */}
            <AnimatedButton
              animateLocation='bottom-right'
              setOpenModal={setOpenModal}
              index={3}
            ></AnimatedButton>
          </MotionGrid>
        )}

        {openModal === 'top-left' && (
          <CustomModal variant='top-left' setOpenModal={setOpenModal}></CustomModal>
        )}
        {openModal === 'bottom-left' && (
          <CustomModal variant='bottom-left' setOpenModal={setOpenModal}></CustomModal>
        )}
        {openModal === 'top-right' && (
          <CustomModal variant='top-right' setOpenModal={setOpenModal}></CustomModal>
        )}
        {openModal === 'bottom-right' && (
          <CustomModal variant='bottom-right' setOpenModal={setOpenModal}></CustomModal>
        )}
      </AnimatePresence>
    </MotionCenter>
  )
}

import * as React from 'react'
import { Box, Center, Grid } from '@chakra-ui/react'

import { AnimatedButton } from './AnimatedButton'
import { CustomModal } from './CustomModal'
import { AnimatePresence, motion } from 'framer-motion'

export const AnimatedTechButtons = () => {
  const [openModal, setOpenModal] = React.useState('')

  const MotionCenter = motion(Center)
  const MotionGrid = motion(Grid)
  const list = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

  return (
    <MotionCenter h='350px'>
      <AnimatePresence>
        <MotionGrid gridGap={5} gridTemplateColumns='repeat(2, 1fr)' mx={4}>
          {/* create buttons */}
          {list.map((item, idx) => {
            return openModal !== item ? (
              <AnimatedButton
                animateLocation={item}
                setOpenModal={setOpenModal}
                index={idx}
              ></AnimatedButton>
            ) : (
              <Box h='125px'></Box>
            )
          })}
        </MotionGrid>

        {openModal !== '' && (
          <CustomModal variant={openModal} setOpenModal={setOpenModal}></CustomModal>
        )}
      </AnimatePresence>
    </MotionCenter>
  )
}

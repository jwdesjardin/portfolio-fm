import * as React from 'react'
import { Box, Center, Grid } from '@chakra-ui/react'

import { AnimatedButton } from './AnimatedButton'
import { CustomModal } from './CustomModal'
import { AnimatePresence, motion } from 'framer-motion'

export const AnimatedTechButtons = () => {
  const [openModal, setOpenModal] = React.useState<string | null>(null)

  const MotionCenter = motion(Center)
  const MotionGrid = motion(Grid)
  const list = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

  return (
    <MotionCenter h='350px'>
      <MotionGrid gridGap={5} gridTemplateColumns='repeat(2, 1fr)' mx={4}>
        {/* create buttons */}
        {list.map((item, idx) => {
          return openModal !== item ? (
            <AnimatedButton
              key={idx}
              animateLocation={item}
              setOpenModal={setOpenModal}
              index={idx}
            ></AnimatedButton>
          ) : (
            <Box key={idx} h='125px'></Box>
          )
        })}
      </MotionGrid>

      <AnimatePresence>
        {openModal && <CustomModal openModal={openModal} setOpenModal={setOpenModal}></CustomModal>}
      </AnimatePresence>
    </MotionCenter>
  )
}

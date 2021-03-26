import * as React from 'react'
import { Box, useMediaQuery } from '@chakra-ui/react'

import { AnimatedButton } from './AnimatedButton'
import { CustomModal } from './CustomModal'
import { AnimatePresence } from 'framer-motion'
import { MotionCenter, MotionGrid } from '../../../../../../utils/animations'

export const AnimatedTechButtons = () => {
  const [openModal, setOpenModal] = React.useState<string | null>(null)
  const [mobile] = useMediaQuery('(max-width: 400px)')
  const list = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

  return (
    <MotionCenter h={mobile ? 'auto' : '350px'} flexDirection={mobile ? 'column' : 'row'}>
      <MotionGrid
        gridGap={5}
        gridTemplateColumns={
          mobile ? (openModal ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)') : 'repeat(2, 1fr)'
        }
        m={4}
      >
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
            <Box m={0} p={0} key={idx} h={mobile ? '100px' : '125px'}></Box>
          )
        })}
      </MotionGrid>

      <AnimatePresence>
        {openModal && <CustomModal openModal={openModal} setOpenModal={setOpenModal}></CustomModal>}
      </AnimatePresence>
    </MotionCenter>
  )
}

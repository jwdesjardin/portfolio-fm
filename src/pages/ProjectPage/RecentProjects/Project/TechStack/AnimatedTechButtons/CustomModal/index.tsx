import * as React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import { Close } from '@material-ui/icons'
import { motion } from 'framer-motion'

import BlockContent from '@sanity/block-content-to-react'

import { MotionBox } from '../../../../../../../utils/animations'

interface CustomModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<string | null>>
  project: any
  openModal: string
}

export const CustomModal: React.FC<CustomModalProps> = ({ setOpenModal, openModal, project }) => {
  const ModalVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: 'auto', opacity: 1 },
    exit: { width: 0, opacity: 0 },
  }

  const { colorMode } = useColorMode()

  const getModalBody = (str: string) => {
    if (project) {
      switch (str) {
        case 'top-left':
          return project.topicBody1
        case 'top-right':
          return project.topicBody2
        case 'bottom-left':
          return project.topicBody3
        case 'bottom-right':
          return project.topicBody4
        default:
          return
      }
    }
  }

  const modalBody = getModalBody(openModal)

  return (
    <motion.div
      key={openModal}
      variants={ModalVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.7 }}
    >
      <MotionBox
        fontSize={14}
        p='1rem'
        m='1rem'
        border='2px solid #Fdfffc'
        boxShadow={colorMode === 'light' ? '1px 1px 3px 0px' : ''}
        borderRadius='lg'
        overflowY='scroll'
        maxH='290px'
      >
        <Close onClick={() => setOpenModal(null)} style={{ float: 'right' }}></Close>
        <Box pt='1rem'>
          <BlockContent blocks={modalBody}></BlockContent>
        </Box>
      </MotionBox>
    </motion.div>
  )
}

import * as React from 'react'
import { Box, Center, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { Close } from '@material-ui/icons'
import { motion } from 'framer-motion'
import { AnimatedButton } from '../AnimatedButton'
import { ModalBox } from './ModalBox'

interface CustomModalProps {
  variant: string
  setOpenModal: React.Dispatch<React.SetStateAction<string>>
}

export const CustomModal: React.FC<CustomModalProps> = ({ variant, setOpenModal }) => {
  const MotionBox = motion(Box)

  return (
    <>
      {variant === 'bottom-right' && (
        <MotionBox d='flex' maxH='290px'>
          <VStack spacing={4} mx='.5rem'>
            <AnimatedButton
              animateLocation='top-left'
              setOpenModal={setOpenModal}
              index={0}
            ></AnimatedButton>

            <AnimatedButton
              animateLocation='bottom-left'
              setOpenModal={setOpenModal}
              index={1}
            ></AnimatedButton>
          </VStack>
          <VStack mx='.5rem'>
            <AnimatedButton
              animateLocation='top-right'
              setOpenModal={setOpenModal}
              index={2}
            ></AnimatedButton>
          </VStack>

          <ModalBox animateVar='animateRight' setOpenModal={setOpenModal}></ModalBox>
        </MotionBox>
      )}

      {variant === 'top-right' && (
        <MotionBox d='flex' maxH='290px'>
          <VStack spacing={4} mx='.5rem'>
            <AnimatedButton
              animateLocation='top-left'
              setOpenModal={setOpenModal}
              index={0}
            ></AnimatedButton>

            <AnimatedButton
              animateLocation='bottom-left'
              setOpenModal={setOpenModal}
              index={1}
            ></AnimatedButton>
          </VStack>
          <VStack spacing={4} mx='.5rem'>
            <Box h='125px'></Box>
            <AnimatedButton
              animateLocation='bottom-right'
              setOpenModal={setOpenModal}
              index={3}
            ></AnimatedButton>
          </VStack>

          <ModalBox animateVar='animateRight' setOpenModal={setOpenModal}></ModalBox>
        </MotionBox>
      )}

      {variant === 'bottom-left' && (
        <MotionBox d='flex' maxH='290px'>
          <ModalBox animateVar='animateLeft' setOpenModal={setOpenModal}></ModalBox>

          <VStack spacing={4} mx='.5rem'>
            <AnimatedButton
              animateLocation='top-left'
              setOpenModal={setOpenModal}
              index={0}
            ></AnimatedButton>
          </VStack>
          <VStack mx='.5rem'>
            <AnimatedButton
              animateLocation='top-right'
              setOpenModal={setOpenModal}
              index={2}
            ></AnimatedButton>
            <AnimatedButton
              animateLocation='bottom-right'
              setOpenModal={setOpenModal}
              index={3}
            ></AnimatedButton>
          </VStack>
        </MotionBox>
      )}

      {variant === 'top-left' && (
        <MotionBox d='flex' maxH='290px'>
          <ModalBox animateVar='animateLeft' setOpenModal={setOpenModal}></ModalBox>

          <VStack spacing={4} mx='.5rem'>
            <Box h='125px'></Box>
            <AnimatedButton
              animateLocation='bottom-left'
              setOpenModal={setOpenModal}
              index={1}
            ></AnimatedButton>
          </VStack>
          <VStack mx='.5rem'>
            <AnimatedButton
              animateLocation='top-right'
              setOpenModal={setOpenModal}
              index={2}
            ></AnimatedButton>
            <AnimatedButton
              animateLocation='bottom-right'
              setOpenModal={setOpenModal}
              index={3}
            ></AnimatedButton>
          </VStack>
        </MotionBox>
      )}
    </>
  )
}

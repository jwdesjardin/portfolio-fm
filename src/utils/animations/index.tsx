import { Box, Center, Text, HStack, VStack, Circle, Image, Grid, Modal } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const shakeAnimation = {
  y: [0, -7, -7, -7],
  rotate: [0, -5, 5, 0],
}

export const MotionBox = motion(Box)
export const MotionCircle = motion(Circle)
export const MotionCenter = motion(Center)
export const MotionGrid = motion(Grid)
export const MotionText = motion(Text)
export const MotionHStack = motion(HStack)
export const MotionVStack = motion(VStack)
export const MotionImage = motion(Image)
export const MotionModal = motion(Modal)

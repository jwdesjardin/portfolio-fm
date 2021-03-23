import * as React from 'react'
import { Center, Grid } from '@chakra-ui/react'

import { AnimatedButton } from './AnimatedButton'
import { CustomModal } from './CustomModal'

export const AnimatedTechButtons = () => {
  return (
    <Center w='100%' h='330px'>
      <Grid gridGap={5} gridTemplateColumns='repeat(2, 1fr)'>
        {/* box #1 */}
        <AnimatedButton index={0}></AnimatedButton>

        {/* box #2 */}
        <AnimatedButton index={1}></AnimatedButton>
        {/* box #3 */}
        <AnimatedButton index={2}></AnimatedButton>
        {/* box #4 */}
        <AnimatedButton index={3}></AnimatedButton>
      </Grid>
      <CustomModal></CustomModal>
    </Center>
  )
}

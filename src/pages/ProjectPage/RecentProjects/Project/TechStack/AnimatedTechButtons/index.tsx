import * as React from 'react'
import { Center, Grid } from '@chakra-ui/react'

import { AnimatedButton } from './AnimatedButton'

export const AnimatedTechButtons = () => {
  return (
    <Center w='100%' h='350px'>
      <Grid gridGap={5} gridTemplateColumns='repeat(2, 1fr)'>
        {/* box #1 */}
        <AnimatedButton></AnimatedButton>
        {/* box #2 */}
        <AnimatedButton></AnimatedButton>
        {/* box #3 */}
        <AnimatedButton></AnimatedButton>
        {/* box #4 */}
        <AnimatedButton></AnimatedButton>
      </Grid>
    </Center>
  )
}

import * as React from 'react'
import { Text, useMediaQuery } from '@chakra-ui/react'

export const GreetingText: React.FC = ({ children }) => {
  const [mobile] = useMediaQuery('(max-width: 400px)')
  return (
    <Text fontSize={mobile ? 32 : 64} lineHeight={1.2}>
      {children}
    </Text>
  )
}

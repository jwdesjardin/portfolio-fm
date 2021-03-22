import * as React from 'react'
import { Text } from '@chakra-ui/react'

export const GreetingText: React.FC = ({ children }) => (
  <Text fontSize={64} lineHeight={1.2}>
    {children}
  </Text>
)

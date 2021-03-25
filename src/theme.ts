import { extendTheme, useColorModeValue } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('myDark.900', 'myLight.500')(props),
        bg: mode('myLight.500', 'myDark.900')(props),
        lineHeight: 'base',
      },
    }),
  },

  colors: {
    myGray: {
      50: '#c7ccd1',
      100: '#b0b8bf',
      200: '#9aa3ac',
      300: '#848f9a',
      400: '#6e7a87',
      500: '#5c6670',
      600: '#49525a',
      700: '#373d43',
      800: '#25292d',
      900: '#121416',
    },
    myWhite: {
      500: '#Fdfffc',
    },
    myBlue: {
      500: '#067bdb',
    },
    myPurple: {
      500: '#8a2cc9',
    },
    myGreen: {
      500: '#2ec486',
    },
    myOrange: {
      500: '#ff9f1c',
    },
  },

  components: {
    Link: {
      baseStyle: {
        textDecoration: 'underline',
      },
    },
  },
})

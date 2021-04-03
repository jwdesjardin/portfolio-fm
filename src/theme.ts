import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('myDark.500', 'myWhite.500')(props),
        bg: mode('myPlatinum.500', 'myDark.500')(props),
        lineHeight: 'base',
      },
      h4: {
        fontWeight: 'semibold',
        fontSize: '16px',
        margin: '.5rem 0rem',
        color: 'gray.500',
      },
      p: {
        textAlign: 'justify',
      },
    }),
  },

  colors: {
    myDark: {
      // dark-blue-black
      // 500: '#020c12',
      500: '#121416',
    },
    myWhite: {
      500: '#Fdfffc',
    },
    myPlatinum: {
      500: '#eaebeb',
    },
    myBlue: {
      500: '#1090f9',
    },
    myPurple: {
      500: '#9d47d7',
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

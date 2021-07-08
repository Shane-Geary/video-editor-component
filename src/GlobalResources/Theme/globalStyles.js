//Copyright 2021 Glowstik Inc. All rights reserved.
import Fonts from '../Assets/Fonts/Fonts'
import fontFamilyOpenSans from './typography'
import colors from './palette'
import breakpoints from './breakpoints'
import theme from './theme'

const globalStyles = () => ({
  '@global': {
    body: {
      ...fontFamilyOpenSans,
      overscrollBehaviorY: 'none'
    },
    a: {
      color: colors.brandPink,
    },
    input: {
      ...fontFamilyOpenSans,
    },
    '.activeInputOutline': {
      outline: 'none',
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: theme.palette.formBlue,
      borderRadius: 8
    },
    '.footer': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    '.gridWrapperFooters': {
      height: "100%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden'
    },
    '.grid': {
      display: 'grid',
      gridAutoColumns: '1fr',
      gridTemplateRows: 'auto auto auto auto auto',
      marginRight: 24,
      marginLeft: 24,
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridRowGap: 24,
      gridColumnGap: 24,
      [breakpoints.down('tablet')]: {
        gridColumnGap: 16,
        gridRowGap: 16,
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      },
      [breakpoints.down('landscape')]: {
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      },
    },
    '.headingText': {
      display: 'inline-block',
      fontSize: 40,
      lineHeight: '1.2em',
      textAlign: 'center',
      letterSpacing: 0,
      [breakpoints.down('tablet')]: {
        fontSize: 32,
      },
      [breakpoints.down('landscape')]: {
        fontSize: 30,
      },
    },
    '.subContentText': {
      width: '15em',
      justifyContent: 'center',
      alignItems: 'flex-start',
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 16,
    },
  },
  '@font-face': [
    Fonts.OpenSansLight,
    Fonts.OpenSans,
    Fonts.OpenSansBold,
    Fonts.AvertaBold,
    Fonts.AvertaSemiBold,
    Fonts.Averta,
  ],
})

export default globalStyles

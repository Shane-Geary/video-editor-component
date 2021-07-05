//Copyright 2021 Glowstik Inc. All rights reserved.
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import breakpoints from './breakpoints'
import palette from './palette'
import typography from './typography'
import overrides from './overrides'

const theme = createMuiTheme({
  breakpoints,
  overrides,
  palette,
  typography,
})

export default responsiveFontSizes(theme)

//Copyright 2021 Glowstik Inc. All rights reserved.
import {createTheme, responsiveFontSizes} from '@mui/material';
import breakpoints from './breakpoints'
import palette from './palette'
import typography from './typography'
import overrides from './overrides'

const theme = createTheme({
	overrides,
	palette,
	typography,
})

export default responsiveFontSizes(theme)

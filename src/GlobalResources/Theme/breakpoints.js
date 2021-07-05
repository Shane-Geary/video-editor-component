//Copyright 2021 Glowstik Inc. All rights reserved.
// this implementation is done outside of MUI themes due to poor support
// for custom breakpoints as of v5-alpha
const breakpoints = {
  mobile: 479,
  landscape: 767,
  tablet: 991,
  desktopXL: 1279,
  desktopXXL: 1439,
  desktopXXXL: 1919,
}

const mediaQueries = {
  up: (screensize) => `@media (min-width: ${breakpoints[screensize + 1]}px)`,
  down: (screensize) => `@media (max-width: ${breakpoints[screensize]}px)`,
}

export default mediaQueries

//Copyright 2021 Glowstik Inc. All rights reserved.
// this implementation is done outside of MUI themes due to poor support
// for custom breakpoints as of v5-alpha
const breakpoints = {
	mobile: 479,
	landscape: 767,
	tablet: 991,
	desktopXL: 1280,
	desktopXXL: 1440,
	desktopXXXL: 1920,
}

const mediaQueries = {
	up: (screensize) => `@media (min-width: ${breakpoints[screensize]}px)`,
	down: (screensize) => `@media (max-width: ${breakpoints[screensize]}px)`,
	landscape: '@media (max-height: 568px) and (min-aspect-ratio: 1/1)'
}

export default mediaQueries

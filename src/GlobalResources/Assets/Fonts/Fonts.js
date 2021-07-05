// Copyright 2021 Glowstik Inc. All rights reserved.
import OpenSansLightFont from './OpenSans-Light.ttf'
import OpenSansRegularFont from './OpenSans-Regular.ttf'
import OpenSansBoldFont from './OpenSans-Bold.ttf'

const OpenSansBold = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
      local('OpenSans'),
      local('OpenSans-Bold'),
      url(${OpenSansBoldFont}) format('ttf')
    `,
}

const OpenSansRegular = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
      local('OpenSans'),
      local('OpenSans-Regular'),
      url(${OpenSansRegularFont}) format('ttf')
    `,
}

const OpenSansLight = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
      local('OpenSans'),
      local('OpenSans-Light'),
      url(${OpenSansLightFont}) format('ttf')
    `,
}

const Fonts = {
  OpenSansLight,
  OpenSansBold,
  OpenSansRegular,
}

export default Fonts

// Copyright 2021 Glowstik Inc. All rights reserved.
import OpenSansLightFont from './OpenSansLight.woff2'
import OpenSansFont from './OpenSans.woff2'
import OpenSansBoldFont from './OpenSansBold.woff2'
import AvertaFont from './Averta.woff2'
import AvertaSemiBoldFont from './AvertaSemiBold.woff2'
import AvertaBoldFont from './AvertaBold.woff2'

const Averta = {
	fontFamily: 'Averta',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: '100 499',
	src: `
			url(${AvertaFont}) format('woff2')
		`,
}

const AvertaSemiBold = {
	fontFamily: 'Averta',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: '500 699',
	src: `
			url(${AvertaSemiBoldFont}) format('woff2')
		`,
}

const AvertaBold = {
	fontFamily: 'Averta',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: '700 1000',
	src: `
			url(${AvertaBoldFont}) format('woff2')
		`,
}

const OpenSansLight = {
	fontFamily: 'Open Sans',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: '1 399',
	src: `
			local('OpenSans'),
			local('OpenSans-Light'),
			url(${OpenSansLightFont}) format('woff2')
		`,
}

const OpenSans = {
	fontFamily: 'Open Sans',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: '400 699',
	src: `
			local('OpenSans'),
			local('OpenSans-Regular'),
			url(${OpenSansFont}) format('woff2')
		`,
}

const OpenSansBold = {
	fontFamily: 'Open Sans',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: '700 1000',
	src: `
			local('OpenSans'),
			local('OpenSans-Bold'),
			url(${OpenSansBoldFont}) format('woff2')
		`,
}

const Fonts = {
	Averta,
	AvertaSemiBold,
	AvertaBold,
	OpenSansLight,
	OpenSans,
	OpenSansBold,
}

export default Fonts

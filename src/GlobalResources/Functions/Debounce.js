// Copyright 2021 Glowstik Inc. All rights reserved.
const debounce = (func, ms, args) => {
		let timer
		return () => {
				clearTimeout(timer)
				timer = setTimeout(() => {
						timer = null
						func.apply(null, args)
				}, ms)
		}
}

export default debounce
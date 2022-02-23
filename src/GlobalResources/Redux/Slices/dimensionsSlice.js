// Copyright 2021 Glowstik Inc. All rights reserved.
import { createSlice } from '@reduxjs/toolkit'

export const dimensionsSlice = createSlice({
	name: 'dimensions',
	initialState: {
		height: window.innerHeight,
		width: window.innerWidth
	},
	reducers: {
		getDimensions: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.height = window.innerHeight
			state.width = window.innerWidth
		},
	},
})

// Action creators are generated for each case reducer function
export const { getDimensions } = dimensionsSlice.actions

export default dimensionsSlice.reducer

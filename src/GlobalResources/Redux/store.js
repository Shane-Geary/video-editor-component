// Copyright 2021 Glowstik Inc. All rights reserved.
import {configureStore} from '@reduxjs/toolkit'
import dimensionsReducer from './Slices/dimensionsSlice'

const store = configureStore({reducer: {dimensions: dimensionsReducer}})


export default store
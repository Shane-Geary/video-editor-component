//Copyright 2021 Glowstik Inc. All rights reserved.
import {useEffect} from 'react'
import globalStyles from './GlobalResources/Theme/globalStyles'
import { useDispatch, useSelector } from 'react-redux'
import {getDimensions} from './GlobalResources/Redux/Slices/dimensionsSlice'
import debounce from './GlobalResources/Functions/Debounce.js'
import iNoBounce from 'inobounce'
import {withStyles} from "@material-ui/core"

function App() {
  iNoBounce.enable()
  const dispatch = useDispatch()

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
        dispatch(getDimensions())
    }, 100, [])
    window.addEventListener('resize', debouncedHandleResize)
    return () => {
        window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [dispatch])
  const dynamicHeight = useSelector(state => state.dimensions.height)
  const dynamicWidth = useSelector(state => state.dimensions.width)

  return (
    <div style={{
      height: dynamicHeight,
      width: dynamicWidth,
      overflow: 'hidden',
    }}>
      {/* Component goes here */}
    </div>
  )
}

export default withStyles(globalStyles)(App)

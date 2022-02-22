//Copyright 2021 Glowstik Inc. All rights reserved.
import {useEffect} from 'react'
import globalStyles from './GlobalResources/Theme/globalStyles'
import {GlobalStyles} from 'tss-react'
import { useDispatch, useSelector } from 'react-redux'
import {getDimensions} from './GlobalResources/Redux/Slices/dimensionsSlice'
import debounce from './GlobalResources/Functions/Debounce.js'
import iNoBounce from 'inobounce'
import withStyles from '@mui/styles/withStyles';

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
	<>
		<GlobalStyles styles={globalStyles}/>
		<div style={{
		height: dynamicHeight,
		width: dynamicWidth,
		overflow: 'hidden',
		}}>
		{/* Component goes here */}
		</div>
	</>
  )
}

export default App

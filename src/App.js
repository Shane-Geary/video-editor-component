//Copyright 2021 Glowstik Inc. All rights reserved.
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDimensions} from './GlobalResources/Redux/Slices/dimensionsSlice'
import debounce from './GlobalResources/Functions/Debounce.js'
import iNoBounce from 'inobounce'


import VideoEditor from './VideoEditor/VideoEditor'

function App() {

	const [data, setData] = useState(null)

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

	useEffect(() => {
		callBackendAPI()
			.then(res => setData(res.express))
			.catch(error => console.log(error))
	})

	const callBackendAPI = async () => {
		const response = await fetch('/express_backend')
		const body = await response.json()

		if(response.status !== 200) {
			throw Error(body.message)
		}
		return body
	}


	return (
		<div style={{
			height: dynamicHeight,
			width: dynamicWidth,
			overflow: 'hidden',
		}}>
			<VideoEditor />
			<p style={{
				color: '#ED2290',
				opacity: '40%'
			}}>
				{data}
			</p>
		</div>
	)
}

export default App
//Copyright 2021 Glowstik Inc. All rights reserved.
import {useEffect, useState} from 'react'

import VideoEditor from './VideoEditor/VideoEditor'

function App() {

	const [data, setData] = useState(null)

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
		<div>
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
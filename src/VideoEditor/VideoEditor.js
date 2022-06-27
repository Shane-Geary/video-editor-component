/* eslint-disable func-names */
import {useState, useEffect} from 'react'
import '../editor.css'
import Editor from './Editor'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' // https://fontawesome.com/v5/docs/web/use-with/react
// import {faLightbulb, faMoon} from '@fortawesome/free-solid-svg-icons' // https://fontawesome.com/v5/docs/web/use-with/react
import {useDropzone} from 'react-dropzone'

function VideoEditor() {

	//Boolean state handling whether upload has occured or not
	const [editorOpen, setEditorOpen] = useState(false)

	//State handling storing of the video
	const [videoUrl, setVideoUrl] = useState('')

	//Stateful array handling storage of the start and end times of videos
	const [timings, setTimings] = useState([])

	const {acceptedFiles, getRootProps, getInputProps} = useDropzone({})


	//Handling logic for file uploading from react-dropzone library
	useEffect(() => {
		if(acceptedFiles.length > 0){
			let url = URL.createObjectURL(acceptedFiles[0])
			setVideoUrl(url)
			setEditorOpen(true)
		}
		else{
			setEditorOpen(false)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [acceptedFiles])


	return (
		<div>
			{/* Boolean to handle whether to render the file uploader or the video editor */}
			{editorOpen ?
				<Editor
					videoUrl={videoUrl}
					setVideoUrl={setVideoUrl}
					timings={timings}
					setTimings={setTimings}
				/>
				: <div className={'wrapper'}>
					<div {...getRootProps()} style={{
						border: '2px solid red',
						borderRadius: 20,
						height: 300,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						cursor: 'pointer'
					}}>
						<input {...getInputProps()}/>
						<p>
						Drag n Drop some files here, or click to select files
						</p>
					</div>
				</div>
			}
		</div>
	)
}

export default VideoEditor
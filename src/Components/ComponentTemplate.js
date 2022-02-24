// Copyright 2021 Glowstik Inc. All rights reserved!
//TODO: remove eslint-disable line below.
/* eslint-disable */
import { makeStyles } from 'tss-react/mui'
import { useSelector } from 'react-redux'
// import theme from '../GlobalResources/Theme/theme'



const ComponentTemplate = () => {
	const dynamicHeight = useSelector(state => state.dimensions.height)
	const dynamicWidth = useSelector(state => state.dimensions.width)
	const {classes} = useStyles(
		//TODO: TSS props go in this object:
		{}
	)

	return (
		//TODO: Insert JSX here:
		null
	)
}

const useStyles = makeStyles()((_, props) => ({
	/* 
	-Syntax for breakpoints:
	[theme.breakpoints.direction('breakpointName')]: {
		(List of attributes)
	}
	-When using props, reference props arguement of this function
	*/
	//TODO: Insert TSS here:
		
}))

export default ComponentTemplate
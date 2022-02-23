// Copyright 2021 Glowstik Inc. All rights reserved.
import React, {useEffect, useRef} from 'react'
import lottie from "lottie-web"

const Lottie = ({
		height,
		width,
		svg
}) => {
		const lottieRef = useRef(null)
		useEffect(() => {
				lottie.loadAnimation({
				container: lottieRef.current,
				animationData: svg, //pass in svg prop
				renderer: "svg", // "canvas", "html"
				loop: true, // boolean
				autoplay: true, // boolean
				})
		//eslint-disable-next-line
		}, [])
		return (
				<div ref={lottieRef} style={{height, width}}></div>
		)
}

export default Lottie
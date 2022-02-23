//Copyright 2021 Glowstik Inc. All rights reserved.
/* eslint-disable import/prefer-default-export */
import { gsap, Back } from 'gsap'

//Jiggle input given it's Ref
export const jiggleInput = ({ current }) => {
	gsap.timeline({ paused: false, repeat: 4 })
		.to(current, { x: '10' })
		.to(current, { x: '0' })
		.to(current, { x: '-10' })
		.to(current, { x: '0' })
		.duration(0.1)
		.play()
}

//Animate slide in from right given a duration and a Ref
export const slideIn = (duration, {current}) => {
	gsap.fromTo(
		current,
		{
			x: window.innerWidth
		},
		{
			x: 0,
			duration,
			ease: Back.easeInOut.config(1.7),
		}
	)
}

//Animate fade in given a delay, duration, and a Ref
export const fadeIn = (delay, duration, {current}) => {
	gsap.fromTo(
		current,
		{
			opacity: 0
		},
		{
			opacity: 1,
			delay,
			duration
		}
	)
}
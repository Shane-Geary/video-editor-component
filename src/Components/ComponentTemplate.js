// Copyright 2021 Glowstik Inc. All rights reserved.
//TODO: remove eslint-disable line below
/* eslint-disable */
import { makeStyles } from "@material-ui/styles"
import { useSelector } from 'react-redux'
import breakpoints from '../GlobalResources/Theme/breakpoints'


const ComponentTemplate = () => {
  const dynamicHeight = useSelector(state => state.dimensions.height)
  const dynamicWidth = useSelector(state => state.dimensions.width)
  const classes = useStyles(
    //TODO: JSS props go in this object:
    {}
  )

  return (
    //TODO: Insert JSX here:
    null
  )
}

const useStyles = makeStyles((theme) => ({
  /* 
  -Syntax for breakpoints:
  [breakpoints.direction('breakpointName')]: {
    (List of attributes)
  }
  -When using props, pass in props after the colon of the className and return the content:
  className: props => {
    return {
      (List of attributes)
    }
  }
  */
  //TODO: Insert JSS here:
    
}))

export default ComponentTemplate
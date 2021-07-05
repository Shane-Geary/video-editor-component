// Copyright 2021 Glowstik Inc. All rights reserved.
/* eslint-disable */
import { makeStyles } from "@material-ui/styles"
import { useSelector } from 'react-redux'


const ComponentTemplate = () => {
  const height = useSelector(state => state.dimensions.height)
  const width = useSelector(state => state.dimensions.width)
  const classes = useStyles()

  return (
    //Insert JSX here
    null
  )
}

const useStyles = makeStyles((theme) => ({
    //Insert JSS here:
    
}))

export default ComponentTemplate
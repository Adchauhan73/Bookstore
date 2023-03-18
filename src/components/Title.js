import React from 'react'

function Title(props) {
  
	const {title , desc} = props
	return (
	<div>{title} {desc}</div>
  )
}

export default Title
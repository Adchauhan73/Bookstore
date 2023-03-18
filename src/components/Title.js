import React from 'react'



const Title = ({field}) => {
	return(
		<div>
			<h2>
			I am {field.title}.
			{field.description}
		</h2>
		</div>
	)
}

export default Title
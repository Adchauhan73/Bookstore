import React from 'react'


const  Title = (props) => {
    const {title , name } = props;
    const {field} = props;
    return (
    <div>
      <h1>Hello  {title}  and this for {name}</h1>
      <h2>This is id {field.id},This is title {field.title}, {field.description}</h2>
    </div>
  )
}

export default Title
import React from 'react'

const Comentario = (props) => {
  console.log(props.comment)
  return (
      <div>
          <h1>{props.comment[0].telefono}</h1>
          <h2>{props.comment[0].comentario}</h2>
      </div>
  )
}

export default Comentario;
//import React from 'react'
//aca no uso react asi q no lo necesito, no importar algo q no use

const Card = (props) => {

    console.log(props);
  return (
    <div>
      <h3>Titulo de Card: Elemento n° {props.elemento} </h3>
    </div>
  )
}

export default Card

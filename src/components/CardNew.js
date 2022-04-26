import { useState } from "react"

const CardNew = (props) => {

  return (
      <>
        <div>Componente CardNew</div>
        {props.otroComponente({name:'Javier', edad: 24})}
      </>
  )
}
export default CardNew
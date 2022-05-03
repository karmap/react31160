import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = () => {

  const [cond, setCond] = useState(true)
  
  const onAdd = () => { 
    console.log('on add ...');
  }

  return (
    <div>
      {cond ? <strong>Verdadero</strong> : <strong>False</strong> }
      {cond && <strong>se rendeerea en true</strong> }
      {!cond && <strong>se rendeerea en false</strong> }
      <ItemCount onAdd={onAdd} />
    </div>
  )
}
export default ItemDetail
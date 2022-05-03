const ItemCount = ({ onAdd }) => {

  // const [count, setCount] = useState(second)

  return (
    <div>
        <button>+</button>
        {/* { count } */}
        <button>-</button>

        <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}
export default ItemCount
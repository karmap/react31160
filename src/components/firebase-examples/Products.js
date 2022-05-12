import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'items')
    getDocs( itemsCollection ).then( snapshot => {
      const productsList = []
      snapshot.docs.forEach( s => { 
        console.log( s.data() );
        productsList.push( { id: s.id, ...s.data()} )
      })
      console.log(productsList);
      setProducts( productsList )
    })
  }, [])
  
  return (
    <div>
      { products.map( p => <li> { p.title } </li> ) }
    </div>
  )
}
export default Products
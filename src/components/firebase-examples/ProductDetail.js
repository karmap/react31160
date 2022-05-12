import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const ProductDetail = () => {

  const [item, setItem] = useState({})

  useEffect(() => {
    const db = getFirestore()

    const iphone = doc(db, 'items', 'KtaqdGLDr9mcPuIJxh6h')
    getDoc( iphone ).then( res => {
      if (res.exists()) {
        console.log(res);
        console.log(res.id);
        console.log(res.data());
        setItem(res.data())
      }
    })

  }, [])
  

  return (
    <>
      <div>Product Detail</div>
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <div>{item.stock}</div>
    </>
  )
}
export default ProductDetail
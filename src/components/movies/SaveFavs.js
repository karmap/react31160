import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
import { useEffect } from "react";
import { useFavContext } from "../../context/favContext"
import FavsList from "./FavsList";

const SaveFavs = () => {

  const { favorites } = useFavContext()

  useEffect(() => {
    console.log( favorites );
  }, [])
  
  const saveFavs = async () => {
    const user = {
      name: 'Juan Perez',
      phone: '+52434334344',
      email: 'juan@gmail.com'
    }

    const favsWithoutImg = favorites.map( ({id, title}) => ({id, title}) )

    const favsToSave = {
      // buyer
      user: user,
      // items
      favs: favsWithoutImg,
      total: favorites.length
    }

    console.log( favsToSave );

    const db = getFirestore()
    const favsCollection = collection(db, 'favs')

    const response = await addDoc(favsCollection, favsToSave)
    // console.log(response);
    console.log(response.id);
  }

  const updateFavs = async () => {
    const idDoc = 'noid'

    const db = getFirestore()
    const favsDoc = doc(db, 'favs', idDoc)
    try {
      await updateDoc(favsDoc, { total: 44 })
    } catch (error) {
      console.log('hubo error', error);
    }
  }

  const batchUpdate = () => {
    const db = getFirestore()
    const batch = writeBatch(db)

    const doc1 = doc(db, 'favs', '2nCl9t3FoOD63k9johbb')
    batch.update(doc1, { total: 33 })

    const doc3 = doc(db, 'favs', 'N4fYnyiGieC0kCkH4Lz4')
    batch.delete(doc3)

    const doc2 = doc(db, 'favs', 'AXCvBGbCwGJnlpYgObaP')
    batch.update(doc2, { total: 33 })
    
    batch.commit()
  }

  return (
    <div>
        { favorites.length > 0 ?  <FavsList/> : <h1 className="text-3xl">No hay favoritos</h1> }
        <button onClick={saveFavs} className="btn">Salvar lista de favoritos</button>
        <br/>
        <button onClick={updateFavs} className="btn">Actualizar documento</button>
        <br/>
        <button onClick={batchUpdate} className="btn">Batch</button>
    </div>
  )
}
export default SaveFavs
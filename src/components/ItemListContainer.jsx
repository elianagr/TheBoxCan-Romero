import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/productsData"
import ItemList from "./ItemList"
import { getFirestore, query, collection, getDocs, where } from "firebase/firestore"

const ItemListContainer = () => {

  const { categoriaId } = useParams()
  const [categoria, setCategoria] = useState()

  useEffect(() => {
    const db = getFirestore()

    const q = query
      (collection(db, 'items'),
      where('categorias', '===', 'collares'),
      where('categorias', '===', 'pretales'),
      where('categorias', '===', 'correas'),
      where('categorias', '===', 'otros'),
      )

    getDocs(q).then(snapshop => {
      if(snapshop.categoria === undefined) {
        console.log('nada')
      }
      setCategoria(snapshop.docs.filter(doc => ({
        //id: doc.id, ...doc.data()
        id: doc.categoria === snapshop
      })))
    })
}, [])
  

  useEffect(() => {
    if (categoriaId === undefined) {
      getItem().then((res) => setCategoria(res))
    } else {
      getItem().then((res) =>
      setCategoria(res.filter((p) => p.categoria === categoriaId))
      )}
  }, [categoriaId])

  return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <ItemList categoria={categoria} />
        </div>
      </div>
  )
}

export default ItemListContainer
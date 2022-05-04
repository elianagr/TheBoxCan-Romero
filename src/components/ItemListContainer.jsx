import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem, productsData } from "../data/productsData"
import ItemList from "./ItemList"

const ItemListContainer = () => {

  const { categoriaId } = useParams()
  const [categoria, setCategoria] = useState()

  useEffect(() => {
    if (categoriaId === undefined) {
      getItem().then((res) => setCategoria(res))
    } else {
      getItem().then((res) =>
      setCategoria(res.filter((p) => p.categoria == categoriaId))
      )}
  }, [categoriaId])

  /*useEffect(() => {
    setCategoria (productsData.filter(p => p.categoria == categoriaId))
  }, [categoriaId])*/
  

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <ItemList categoria={categoria} />
      </div>
    </div>
  )
}

export default ItemListContainer
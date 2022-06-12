import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import Spinner from '../Spinner'

const ItemList = () => {
  const { categoriaId } = useParams()
  const [items, setItems] = useState([])
  const [spinner, setSpinner] = useState(false)
  
  useEffect(() => {
    const db = getFirestore()
    const getItems = async () => {
      setSpinner(true)
      const myItems = categoriaId
      ? query(collection(db, "items"), where("categoria", "==", categoriaId))
      : collection(db, "items")
    const querySnap = await getDocs(myItems)
      setItems(querySnap.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }))
      setSpinner(false)
    }
    getItems()
  }, [categoriaId])
  

  return (
    <>
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    {spinner
        ? <Spinner  />
        : (
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items.map((producto) => (
              <Item key={producto.id} producto={producto} categoria={categoriaId} />
            ))}
            </div>
        )
    }
      </div>
    </div>
    </>
  )
}

export default ItemList
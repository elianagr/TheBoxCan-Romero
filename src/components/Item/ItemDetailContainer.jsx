import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const item = doc(db, 'items', id)
    getDoc(item).then(res => {
        if (res.exists()) {
            setProducto(res.data())
        }
    })
}, [id])

  return (
    <div>
      <ItemDetail producto= {producto} />
    </div>
  )
}

export default ItemDetailContainer
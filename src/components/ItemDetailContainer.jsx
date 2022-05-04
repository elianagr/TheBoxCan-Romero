import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../data/productsData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const {id} = useParams()

  useEffect(() => {
    if (id == undefined) {
      getItem().then((res) => setItem(res))
    } else {
      getItem().then((res) => setItem(res[id]))
    }
  }, [id])

  return (
    <div>
      <ItemDetail item= {item} />
    </div>
  )
}

export default ItemDetailContainer
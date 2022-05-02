import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const [itemDetail, setItemDetail] = useState([])

  useEffect(() => {
    getItemDetail()
  }, [])

  const getItemDetail = () => {
    const URL = 'https://swapi.dev/api/starships'
    console.log(URL)
      fetch(URL)
        .then(res => {
            return res.json()
        })
        .then(data=> {
          setItemDetail(data.results)
        })
  }

  return (
    <div>
      {itemDetail.map(i => <li><ItemDetail key={i.url} starship={i}/></li>)}
    </div>
  )
}

export default ItemDetailContainer
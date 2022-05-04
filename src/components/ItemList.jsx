import { useEffect, useState } from 'react'
import { productsData } from "../data/productsData.js"
import Item from './Item';

const ItemList = ({categoria}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    const getProductsPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res( productsData )
      }, 2000);
    })

    getProductsPromise
    .then( data => {
      setProducts ( data )
    })
  }


  return (
    <>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {categoria && categoria.map(p => <Item key={p.id} product={p}/> )}
      </div>
    </>
  )
}

export default ItemList
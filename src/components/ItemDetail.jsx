import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productsData } from '../data/productsData'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'

const ItemDetail = (  ) => {

  const { itemId } = useParams()
  const [item, setItem] = useState({})

  const [finalizar, setFinalizar] = useState(false)

  useEffect(() => {
    setItem ( productsData.find( i => i.id == itemId))
  }, [itemId])

  const onAdd = (count) => {
    setFinalizar(true)
    console.log(count);
  }
  

  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img className="w-full h-full object-center object-cover" src={item.imgItem} alt={item.altItem} />
            </div>
            <div className="max-w-8 mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {item.nombre}
                </h1>

                <div className="mt-6 space-y-6">
                    <p className="text-base text-gray-900">{item.descripcion}</p>
                </div>

                  <p className="mt-3 text-3xl text-gray-900">${item.precio}</p>

                  <div className='mt-6'>
                    {finalizar ?
                        <Link to="/carrito"className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Producto Agregado!</Link>
                        : (
                          <ItemCount stock={item.stock} onAdd={onAdd}/>
                        )
                    }
                  </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail
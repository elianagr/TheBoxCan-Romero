import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Link, useParams } from 'react-router-dom'
import ItemCount from '../ItemCount'

const ProductDetail = () => {

  const { id } = useParams()
  const [item, setItem] = useState({})
  const [finalizar, setFinalizar] = useState(false)

  useEffect(() => {
    const db = getFirestore()

    const itemId = doc(db, 'items', id)
    getDoc( itemId ).then(res => {
      if (res.exists()) {
        setItem(res.data())
      }
    })
  }, [id])

  const onAdd = (count) => {
    setFinalizar(true)
    console.log(count);
  }
  
  return (
    <>
    <div className="bg-white mb-20">
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
                    <div className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        <Link to="/carrito">                        
                          <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <span className="font-medium">Producto Agregado! Ir al Carrito</span>
                          </Link>
                          </div>
                        : (
                          <ItemCount stock={item.stock} onAdd={onAdd} id={item.id} />
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

export default ProductDetail
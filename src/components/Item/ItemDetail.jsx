import ItemCount from './ItemCount'
import { useState } from "react";
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {

  const {nombre, precio, descripcion, imgItem, altItem, stock, id } = producto

  const [finalizar, setFinalizar] = useState()

  const onAdd = (count) => {
    setFinalizar(true)
  }
  
  return (
    <>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img src={imgItem} alt={altItem} className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded' />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-10 lg:mt-20'>
                <h1 className='text-gray-900 text-5xl title-font font-medium mb-5'>{nombre}</h1>
                <p className='leading-relaxed mb-5'>{descripcion}</p>
              <span className='title-font font-bold text-3xl text-blue-600'>${precio}</span>
              <div className=''>
                    {finalizar ? (
                        <Link to="/carrito" className="inline-flex items-center mt-8 px-6 py-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle mr-3" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                          </svg>
                          
                            Producto agregado. Ir al Carrito.
                        </Link>
                        ) : (
                          <ItemCount stock={stock} onAdd={onAdd} id={id} />
                    )}
                  </div>
            </div>
          </div>
        </div>
      </section>
      {/*<div className="bg-white">
        <div className="pt-6">
           <div className="mt-6 shadow-xl max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img className="w-full h-full object-center object-cover" src={imgItem} alt={altItem} />
            </div>
            <div className="max-w-8 mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className="lg:col-span-2 lg:pr-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {nombre}
                </h1>

                <div className="mt-6 space-y-6">
                    <p className="text-base text-gray-900">{descripcion}</p>
                </div>

                  <p className="mt-3 text-3xl text-gray-900">${precio}</p>

                  <div className='mt-6'>
                    {finalizar ? (
                        <Link to="/carrito" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Producto Agregado!</Link>
                        ) : (
                          <ItemCount stock={stock} onAdd={onAdd} id={id} />
                    )}
                  </div>
              </div>
          </div>
          </div> 
        </div>
      </div>*/}
    </>
  )
}

export default ItemDetail
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
    </>
  )
}

export default ItemDetail
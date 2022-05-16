import React from 'react'
import { useCartContext } from './context/CartContext'

const CartListContainer = ({item}) => {

    const {deleteFromCart, quantity} = useCartContext()

    const emptyItemHandler = () => { deleteFromCart() }

  return (
    <>
        <div className="text-left mt-6 w-auto mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div id="app" className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
            <img className="w-46 h-full object-center object-cover" src={item.imgItem} alt={item.altItem} />
                <div className="w-full flex flex-col">
                    <div className="p-4 pb-0 flex-1">
                        <h3 className="font-light mb-1 text-grey-darkest">{item.nombre}</h3>
                        <span className="text-5xl text-grey-darkest">${item.precio}</span>
                    </div>
                    <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                        Items Agregados: {quantity()}
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
                <button onClick={emptyItemHandler}><svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg></button>
            </div>
        </div>
    </>
  )
}

export default CartListContainer
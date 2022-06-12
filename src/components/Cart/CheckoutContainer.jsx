import React from 'react'
import { useCartContext } from '../context/CartContext'

const CheckoutContainer = ({producto}) => {

    const {subTotal} = useCartContext()

  return (
    <>
        <li className="grid grid-cols-6 gap-2 border-b-1">
            <div className="col-span-1 self-center">
                <img src={producto.imgItem} alt={producto.altItem} className="rounded w-full" />
            </div>
            <div className="flex flex-col col-span-3 pt-2">
                <span className="text-gray-400 text-sm inline-block pt-2">{producto.nombre}</span>
            </div>
            <div className="col-span-2 pt-3">
                <div className="flex items-center space-x-2 text-sm justify-between">
                    <span className="text-gray-400">{producto.quantity} x {producto.precio}</span>
                    <span className="text-blue-400 font-semibold inline-block">${subTotal(producto.precio, producto.quantity)} </span>
                </div>
            </div>
        </li>
    </>
  )
}

export default CheckoutContainer
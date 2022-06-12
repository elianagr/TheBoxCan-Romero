import React from 'react'
import { useCartContext } from '../context/CartContext'

const CartListContainer = ({producto}) => {

    const {deleteFromCart, subTotal} = useCartContext()

  return (
    <>
        <tbody>
            <tr>
                <td className='px-4 py-3'>
                    <img className="w-32 h-full object-center object-cover" src={producto.imgItem} alt={producto.altItem} />
                </td>
                <td className='px-4 py-3'>{producto.nombre}</td>
                <td className='px-4 py-3'>${producto.precio}</td>
                <td className='px-4 py-3'>{producto.quantity}</td>
                <td className='px-4 py-3'>${subTotal(producto.precio, producto.quantity)}</td>
                <td className="px-4 py-3">
                    <button onClick={ () => deleteFromCart(producto.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </td>
            </tr>
        </tbody>
    {/* <tbody className="bg-white divide-y divide-gray-300">
        <tr className="whitespace-nowrap">
        
            <td className="px-6 py-4 text-sm text-gray-500">
                <img className="w-32 h-full object-center object-cover" src={producto.imgItem} alt={producto.altItem} />
            </td>
            <td className="px-4 py-4">
                <div className="text-sm text-gray-900">
                    {producto.nombre}
                </div>
            </td>
            <td className="px-14 py-4">
                <div className="text-sm text-gray-500">${producto.precio}</div>
            </td>
            <td className="px-16 py-4 text-sm text-gray-500">
                x{producto.quantity}
            </td>
            <td className="px-16 py-4 text-sm text-gray-500">
                ${subTotal(producto.precio, producto.quantity)}
            </td>
            <td className="px-16 py-4">
                <button onClick={ () => deleteFromCart(producto.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </td>

        </tr>
    </tbody> */}
    </>
  )
}

export default CartListContainer
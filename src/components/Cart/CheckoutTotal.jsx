import React from 'react'
import { useCartContext } from '../context/CartContext'

const CheckoutTotal = () => {

    const {total} = useCartContext()
    
  return (
    <>
        <div className="px-8 border-b">
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Envío</span>
                    <span className="font-semibold text-blue-500">¡Envío Gratis!</span>
                </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Total</span>
                <span>${total()}</span>
            </div>
    </>
  )
}

export default CheckoutTotal
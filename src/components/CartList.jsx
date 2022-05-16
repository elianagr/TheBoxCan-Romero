import React from 'react'
import { Link } from 'react-router-dom'
import CartListContainer from './CartListContainer'
import { useCartContext } from './context/CartContext'

const CartList = () => {

    const {cart, deleteCart, total} = useCartContext()

  return (
     <>
     <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-left">
                <h2 className="mt-2 mb-10 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Mi Carrito</h2>
            </div>
        </div>
        {cart && cart.length > 0 ? (
            <div className='ml-20'>
                <button onClick={ () => {deleteCart()} } className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-72">
                    Vaciar Carrito</button>
                
                { cart.map(c => <CartListContainer key={c.id} item={c} /> )}

            <div className='mt-10 ml-72'>
                <p className='text-blue-600 text-2xl font-bold'>Precio Total: ${total()}</p>
            </div>

            <button className='ml-72 mt-20 mb-20'>
                <p className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2'>Terminar Compra</p>
            </button>
        </div>
        ) : (
            <div className='mt-10 ml-96'>
                <p className='text-blue-600 text-2xl font-bold mb-10'>Tu carrito está vacío, hacé click abajo para redireccionarte a la Tienda!</p>
                <Link to="/" className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2'>Ir a la Tienda</Link>
            </div>
        )}
        </div>
    </>
  )
}

export default CartList
import React from 'react'
import { Link } from 'react-router-dom'
import CartItemContainer from './CartItemContainer'
import { useCartContext } from '../context/CartContext'

const CartItem = () => {

    const {cart, deleteCart, total} = useCartContext()

  return (
     <>
     <section className='text-gray-600 body-font'>
        <div className='container px-4 py-12 mx-auto'>
            <div className='flex flex-col text-center w-full mb-10'>
                <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>Mi Carrito</h1>
            </div>

            {cart && cart.length > 0 ? (
            <div className='lg:w-2/3 w-full mx-auto overflow-auto'>

                <button onClick={ () => {deleteCart()} } className="flex mx-auto mb-10 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                Vaciar Carrito</button>

                <table className='table-auto w-full text-left whitespace-no-wrap'>
                    <thead>
                        <tr>
                            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Producto</th>
                            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Nombre</th>
                            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Precio</th>
                            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Cantidad</th>
                            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Subtotal</th>
                            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Eliminar</th>
                        </tr>
                    </thead>
                    
                    { cart.map(item => <CartItemContainer key={item.id} producto={item} /> )}

                </table>

                <div className='flex pl-2 mt-5 lg:w-2/3 w-full mx-auto border-t-2 border-blue-500'>
                    <div className='flex mx-auto text-blue-600 py-2 px-8 mt-6 focus:outline-none rounded text-lg text-2xl font-bold'>
                        <p>Precio Total: ${total()}</p>
                    </div>
                    
                    <Link to='/checkout'  className='flex ml-auto text-white bg-blue-500 border-0 mt-6 py-3 px-6 focus:outline-none hover:bg-blue-600 rounded'>
                    <p>Terminar Compra</p>
                    </Link>
                </div>

            
                
            </div>
            ) : (
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Tu carrito está vacío, hacé click en el botón para redireccionarte a la Tienda!</h1>
                        <Link to="/" className="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0">Ir a la Tienda</Link>
                    </div>
                </div>
                
            )}
            </div>
        
     </section>
    </>
  )
}

export default CartItem
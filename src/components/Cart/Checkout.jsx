import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import CheckoutContainer from './CheckoutContainer'
import CheckoutTotal from './CheckoutTotal'

const Checkout = () => {

    const {cart, total, deleteCart} = useCartContext()

    const [idCompra, setIdCompra] = useState("")
    const [modal, setModal] = useState(false)
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        adress: "",
    })

    const ordenDate = new Date().toLocaleDateString()

    const handleSubmitChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function orderHandler() {
        const orden = {
            user,
            item: cart,
            total: total(),
            date: ordenDate
        }
        guardarEnFirestore(orden)
    }

    const guardarEnFirestore = (orden) => {
        const db = getFirestore()
        const ordenCollection = collection(db, 'carrito')

        addDoc(ordenCollection, orden).then(data => {
            setIdCompra(data.id)
        })
    }

  return (
    <>
    <section className='text-gray-600 body-font relative'>
        <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
            <div className='lg:w-2/3 md:w-1/2 bg-gray-100 rounded-lg overflow-hidden sm:mr-10 p-10'>
                <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Orden de Compra</h1>
                    <ul className="py-6 border-b space-y-6 px-4">
                        { cart.map(item => <CheckoutContainer key={item.id} producto={item} /> )}
                    </ul>
                    <CheckoutTotal />
            </div>
            
            <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
                <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>Checkout</h2>
                <p className='leading-relaxed mb-5 text-gray-600'>Completá con tus datos para poder realizar la compra.</p>
                <div className='relative mb-4'>
                    <label className="leading-7 text-sm text-gray-600">
                        <span className="text-right px-2">Nombre</span>
                        <input id="name" name="name" type="text" className="focus:outline-none px-3" placeholder="Nombre" required onChange={handleSubmitChange} />
                    </label>
                </div>
                <div className='relative mb-4'>
                    <label className="leading-7 text-sm text-gray-600">
                        <span className="text-right px-2">Apellido</span>
                        <input id="surname" name="surname" type="text" className="focus:outline-none px-3" placeholder="Apellido" required onChange={handleSubmitChange} />
                    </label>
                </div>
                <div className='relative mb-4'>
                    <label className="leading-7 text-sm text-gray-600">
                        <span className="text-right px-2">Email</span>
                        <input id="email" name="email" type="email" className="focus:outline-none px-3" placeholder="ejemplo@ejemplo.com" required onChange={handleSubmitChange} />
                    </label>
                </div>
                <div className='relative mb-4'>
                    <label className="leading-7 text-sm text-gray-600">
                        <span className="text-right px-2">Teléfono</span>
                            <input id="phone" name="phone" type="phone" className="focus:outline-none px-3" placeholder="11 2345 6789" required  onChange={handleSubmitChange} />
                    </label>
                </div>
                <div className='relative mb-4'>
                    <label className="leading-7 text-sm text-gray-600">
                        <span className="text-right px-2">Dirección</span>
                            <input id="adress" type="text" name="adress" className="focus:outline-none px-3" placeholder="Dirección" required onChange={handleSubmitChange} />
                    </label>
                </div>

                {user.name && user.surname && user.phone && user.email && user.adress
                ? (
                    <button onClick={() => { orderHandler(); setModal(true) }} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="button" data-modal-toggle="popup-modal">Pagar ${total()}
                    </button>
                ) : (
                    <input className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none rounded text-lg opacity-50" type="submit" value="Completá los datos" disabled />
                )
                }
            </div>
        </div>
        
        {/*Modal */}
        <div id="popup-modal" tabIndex="-1" className={`${modal ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-60 fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center h-screen lg:w-full sm:full`}>
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="p-6 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-auto mb-4 w-14 h-14 text-green-400 text-green-200" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                        </svg>
                        
                        <h3 className="mb-5 text-lg font-normal text-blue-500 ">Tu compra fue realizada con éxito! Recibirás un mail con el código de compra <strong>#{idCompra}</strong>
                        </h3>

                        <Link to="/">
                            <button onClick={deleteCart} data-modal-toggle="popup-modal" type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Volver a la Tienda.
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Checkout
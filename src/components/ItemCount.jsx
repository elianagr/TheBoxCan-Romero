import { useEffect, useState } from 'react'
import { useAppContext } from './context/AppContext'
import { useCartContext } from './context/CartContext'

const ItemCount = ({stock, onAdd, id}) => {

    const [count, setCount] = useState(1)

    const {addToCart} = useCartContext()
    const {item} = useAppContext()

    useEffect( () => {
    } , [count])

    const addHandler = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const removeHandler = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const clickHandler = (id, cantidad) => {
        const findItem = item.find((item) => item.id === id)

        if(!findItem) {
            alert("Error")
            return
        }

        addToCart(findItem, cantidad)
        onAdd(count)
    }


  return (
    <div>
        <button onClick={removeHandler} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-orange dark:text-orange focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white white:bg-gray-900 rounded-md group-hover:bg-opacity-75">-
            </span>
        </button>

        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> {count} </button>

        <button onClick={addHandler} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-orange dark:text-orange focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white white:bg-gray-900 rounded-md group-hover:bg-opacity-75">+
            </span>     
        </button>

        <button onClick={() => clickHandler(id, count) }  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Agregar</button>
    </div>

    
  )
}

export default ItemCount
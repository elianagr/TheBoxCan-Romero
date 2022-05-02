import { useEffect, useState } from 'react'

const ItemCount = () => {

    const [count, setCount] = useState(1)

    useEffect( () => {
    } , [])

    useEffect( () => {
    } , [count])

    const addHandler = () => {
        setCount(count + 1)
    }

    const removeHandler = () => {
        if (count > 1) {
            setCount(count - 1)
        }
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
    </div>

    
  )
}

export default ItemCount
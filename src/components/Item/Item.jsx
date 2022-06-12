import { useState } from "react"
import { Link } from "react-router-dom"


const Item = ({ producto }) => {  
  const [like, setLike] = useState(false)

  const likeHandler = () => {
    setLike(previousValue => {
      return !previousValue
    })
  }
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg pb-8">
        <div>
            <button onClick={likeHandler}>
                { like ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="red">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>) :
              (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>)}
            </button>
          </div>
        <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img className="w-full h-full object-center object-cover group-hover:opacity-75" src={producto.imgItem} alt={producto.altItem} />
            </div>
            <h3 className="mt-4 ml-6 text-sm text-gray-700">{producto.nombre}</h3>
            <p className="mt-1 mb-6 ml-6 text-lg font-medium text-gray-900">${producto.precio}</p>
        </div>
        <Link to={`/item/${producto.id}`} className="ml-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6">Ver Detalles</Link>
      </div>
    </>
  )
}

export default Item
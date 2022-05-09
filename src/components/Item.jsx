import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"


const Item = ({ product }) => {
  const {id, nombre, precio, imgItem, altItem} = product
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <a href="" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img className="w-full h-full object-center object-cover group-hover:opacity-75" src={imgItem} alt={altItem} />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{nombre}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${precio}</p>
          </a>
          <ItemCount/>
          <Link to={`/item/${id}`} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Ver Detalles</Link>
      </div>
    </>
  )
}

export default Item
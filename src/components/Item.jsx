import ItemCount from "./ItemCount"


const Item = ({ product }) => {
  const {nombre, precio, imgItem, altItem} = product
  return (
    <>
      <div>
          <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img className="w-full h-full object-center object-cover group-hover:opacity-75" src={imgItem} alt={altItem} />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{nombre}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${precio}</p>
          </a>
          <ItemCount/>
      </div>
    </>
  )
}

export default Item
import ItemList from "./ItemList"

const ItemListContainer = () => {

  return (
    <div className="bg-white">
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Productos</h2>
      <ItemList/>
    </div>
  </div>
  )
}

export default ItemListContainer
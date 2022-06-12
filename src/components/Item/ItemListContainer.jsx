import ItemList from "./ItemList"

const ItemListContainer = () => {

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto mt-1 py-16 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">
        <ItemList/>
      </div>
    </div>
  )
}

export default ItemListContainer
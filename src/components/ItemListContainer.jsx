const ItemListContainer = ({children}) => {
  return (
    <div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Productos</h2>
    <div>
      {children}
    </div>
  </div>
</div>
  )
}

export default ItemListContainer
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
      const db = getFirestore()
      const itemsCollection = collection(db, 'items')
      getDocs( itemsCollection ).then(snapshop => {
          const itemsList = []
          snapshop.docs.forEach( s => {
              itemsList.push({id: s.id, ...s.data()})
          })
          setItems(itemsList)
      })
    }, [])
    
  return (
    <>
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.map( i =>
                <div className="max-w-sm rounded overflow-hidden shadow-lg pb-8">
                    <div className="group">
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img className="w-full h-full object-center object-cover group-hover:opacity-75" src={i.imgItem} alt={i.altItem} />
                        </div>
                        <h2 className="mt-4 ml-6 text-sm text-gray-700">{i.nombre}</h2>
                        <p className="mt-1 mb-6 ml-6 text-lg font-medium text-gray-900">${i.precio}</p>
                    </div>
                    <Link to={`/producto/${i.id}`} className="ml-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6"> Ver Detalles</Link>
                </div>
        )}
      </div>
      </div>
      </div>
  </>
  )
}

export default Products
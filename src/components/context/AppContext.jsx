import React, { createContext, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
      const db = getFirestore()
      const items = collection(db, 'items')
      getDocs(items).then(snapshot => {
          const productosLista = []
          snapshot.docs.forEach(s => {
              productosLista.push({id: s.id, ...s.data()})
          })
          setProductos(productosLista)
      })
  }, [])
    
  return (
    <AppContext.Provider value={{productos}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
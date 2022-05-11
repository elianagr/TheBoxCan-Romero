import React, { createContext, useContext, useEffect, useState } from 'react'
import { getItem } from '../../data/productsData'

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {
    const [item, setItem] = useState([])

    useEffect(() => {
      getItem().then((res) => setItem(res))
    })
    
  return (
    <AppContext.Provider value={{item}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
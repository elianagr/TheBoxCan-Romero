import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ProductoDetail = () => {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const correa = doc(db, 'items', '6CzUOHG1ul1o0xO96Us1')
        getDoc(correa).then(res => {
            if (res.exists()) {
                setProducto(res.data())
            }
        })
    }, [])
    
  return (
      <>
        <div>ProductoDetail</div>
        <div>{producto.nombre}</div>
      </>
  )
}

export default ProductoDetail
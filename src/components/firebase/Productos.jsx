import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../Item/ItemList'

const Productos = () => {
    const [producto, setProducto] = useState({})
    const {categoriaId} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const getItem = async () => {
            const myItem = categoriaId
                ? query(collection(db, 'items'), where('categoria', '==', categoriaId))
                : collection(db, 'items')
            const querySnapshot = await getDocs(myItem)
            setProducto(
                querySnapshot.docs.map((producto) => {
                    return { ...producto.data(), id: producto.id}
                })
            )
        }
        getItem()
    }, [categoriaId, setProducto])

    /* useEffect(() => {
        const db = getFirestore()
        const items = collection(db, 'items')
        getDocs(items).then(snapshot => {
            const productosLista = []
            snapshot.docs.forEach(s => {
                productosLista.push({id: s.id, ...s.data()})
            })
            console.log(productosLista)
            setProductos(productosLista)
        })
    }, []) */
    
  return (
    <>
        <div>Productos</div>
        <ItemList producto= {producto} categoria= {categoriaId}/>
      </>
  )
}

export default Productos
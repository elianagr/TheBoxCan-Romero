import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
})

export const useCartContext = () => useContext (CartContext)

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    //Está en carrito?
    const enCarrito = (id) => cart.find((producto) => producto.id == id)

    //Agregar al Cart
    const addToCarrito = (producto, cantidad) => {
        const newCart = [...cart]
        const productoEnCarrito = enCarrito(producto.id)

        if (productoEnCarrito) {
            newCart[newCart.findIndex(prod => prod.id !== productoEnCarrito.id)].quantity += cantidad

            setCart(newCart)
            return
        } else {
            producto.quantity = cantidad
            setCart([...newCart, producto])
        }
    }

    //Eliminar un producto del carrito
    const deleteFromCart = (id) => {
        setCart (cart.filter((producto) => producto.id !== id))
    }

    //Vaciar lista de carrito
    const deleteCart = () => setCart([])

    //cantidad de items agregados
    const carritoLenght = () => {
        let quantity = 0
        cart.forEach((producto) => {
            quantity = quantity + producto.quantity
        })
        return quantity
    }

    //Cantidad
     const quantity = () => cart.reduce((sum, item) => {
        return sum + (item.quantity)
    }, 0)

    //subtotal
    const subTotal = (precio, quantity) => {
        let subtotal = 0
        subtotal = subtotal + (precio * quantity)
        return Number(subtotal)
    }

    //suma total
     const total = () => cart.reduce((suma, producto) => {
        return suma + (producto.quantity * producto.precio)
    }, 0)
    

    const context = {
        cart,
        enCarrito,
        addToCarrito,
        deleteFromCart,
        deleteCart,
        setCart,
        quantity,
        subTotal,
        carritoLenght,
        total
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
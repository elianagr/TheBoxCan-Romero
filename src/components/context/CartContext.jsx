import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const enCart = (id) => cart.find((item) => item.id === id)

    const addToCart = (item, cantidad) => {
        const newCart = [...cart]
        const itemEnCart = enCart(item.id)
        if (itemEnCart) {
            newCart[newCart.findIndex(i => i.id === itemEnCart.id)].quantity += cantidad

            setCart(newCart)
            return
        }
        item.quantity = cantidad
        setCart([...newCart, item])
    }

    const deleteFromCart = (item) => {
        const newCart = [...cart]
        const itemEnCart = enCart(item.id)

        if(!itemEnCart) {
            return
        }

        const deleteItem = newCart.filter((item) => item.id !== item.id)

        setCart(deleteItem)
    }

    const deleteCart = () => setCart([])

    console.log(cart);

    return (
        <CartContext.Provider value={{cart, addToCart, deleteFromCart, deleteCart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
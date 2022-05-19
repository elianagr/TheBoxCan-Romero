import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
})

export const useCartContext = () => {
    return useContext (CartContext)
}

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    //Cantidad
    const quantity = () => cart.reduce((sum, item) => {
        return sum + (item.quantity)
    }, 0)

    //suma total
    const total = () => cart.reduce((sum, item) => {
        return sum + (item.quantity * item.precio)
    }, 0)

    //En cart?
    const enCart = (id) => cart.find((item) => item.id == id)

    //Agregar al Cart
    const addToCart = (item, cantidad) => {
        const newCart = [...cart]
        const itemEnCart = enCart(item.id)
        if (itemEnCart) {
            newCart[newCart.findIndex(i => i.id == itemEnCart.id)].quantity += cantidad

            setCart(newCart)
            return
        }
        item.quantity = cantidad
        setCart([...newCart, item])
    }

    //Eliminar item del cart
    const deleteFromCart = (item) => {
        const newCart = [...cart]
        const itemEnCart = enCart(item.id)

        if(!itemEnCart) {
            return
        }
        const deleteItem = newCart.filter(i => i.id !== i.id)
            setCart(deleteItem)
         
    }

    //Vaciar lista de cart
    const deleteCart = () => setCart([])

    const context = {
        cart,
        addToCart,
        deleteFromCart,
        deleteCart,
        setCart,
        total,
        quantity
    }

    return (
        <CartContext.Provider value={ context}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
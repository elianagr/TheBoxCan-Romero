import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const Cart = () => {
  const {cart} = useContext(CartContext)
  

  return (
    <div>
        <h1>Mi Carrito</h1>
        <strong>CartContext: 
        {cart.map(c => <li> {c} </li>)}
        </strong>
    </div>
     
  )
}

export default Cart
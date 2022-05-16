import CartList from "./CartList"
import { useCartContext } from "./context/CartContext"

const Cart = () => {
  const {cart} = useCartContext()

  console.log(cart)
  

  return (
    <div className="py-12 bg-white">
        <CartList/>
    </div>
     
  )
}

export default Cart
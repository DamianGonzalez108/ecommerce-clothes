import { BsHandbagFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./cartWidget.css"

const CartWidget = () => {
    
  const { quantityTotal } = useContext(CartContext)

    let quantity = quantityTotal()

  return (
    <Link to="/cart">
        <BsHandbagFill size={30} />
        <p>{quantity >=1 && quantity}</p>
    </Link>
  )
}

export default CartWidget
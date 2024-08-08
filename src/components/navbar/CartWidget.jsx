import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./cartWidget.css"

const CartWidget = () => {
    
  const { quantityTotal } = useContext(CartContext)

    let quantity = quantityTotal()

  return (
    <Link to="/cart" className="linkCart">
        <HiOutlineShoppingBag  size={35} color="black" />
        <p>{quantity >=1 && quantity}</p>
    </Link>
  )
}

export default CartWidget
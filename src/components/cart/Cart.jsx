import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./cart.css";
const Cart = () => {
  const { cart, deleteAll, deleteProductForId, totalPrice } = useContext(CartContext);

    if(cart.length === 0){
        return (
            <div>
                <h1>
                    No hay productos en el carrito 
                </h1>
                <Link to="/">ver productos</Link>
            </div>
        )
    }

  return (
    <div>
      {cart.map((productCart) => (
        <div key={productCart.id}>
          <div className="divCardCart">
            <img src={productCart.image} alt="" className="imgCart" />
            <h3>{productCart.quantity}</h3>
            <button onClick={() => deleteProductForId(productCart.id)}>
              X
            </button>
          </div>
        </div>
      ))}
      <div>
        <h2>total:{totalPrice()}</h2>
        <Link to="/checkout" >finalizar compra</Link>
        <button onClick={deleteAll}> vaciar carrito</button>
      </div>
    </div>
  );
};

export default Cart;

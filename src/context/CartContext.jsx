import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (newProduct) => {
    const condition = inCart(newProduct.id)
    if(condition){
      const productModified = cart.map((productCart) => { 
        if(productCart.id === newProduct.id){
          return { ...productCart, quantity: productCart.quantity + newProduct.quantity }
        }else{
          return productCart
        }
       })
       setCart(productModified)
    }
    else {
      setCart([...cart, newProduct]);
    }
  };

const quantityTotal = () => {
  const quantityTotalProduct = cart.reduce( (total, product) => total + product.quantity, 0) 
  return quantityTotalProduct
}

const totalPrice = () => {
  const totalBuy = cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity) , 0)
  return totalBuy
}

const deleteAll = () => {
  setCart([])
}

const inCart = (idProducto) => {
  const condition = cart.some((productCart) => productCart.id === idProducto)
  return condition
}

const deleteProductForId = (idProduct) => {
  const productsFilter = cart.filter ((productCart) => productCart.id !== idProduct)
  setCart(productsFilter)
}

  return (
    <CartContext.Provider value={{ cart, addCart, quantityTotal, deleteAll, deleteProductForId, totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

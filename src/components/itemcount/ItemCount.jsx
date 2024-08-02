import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import "./itemCount.css"

const ItemCount = ({stock, addProduct}) => {
  const [count, setCount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickIncrement = () => {
    if(count < stock){
          setCount(count + 1);
    }
  };

  const handleClickAddToCart = () => {
    addProduct(count)
  }

  return (
    <div className="firstDivItemCount">
      <div className="secondDivItemCount">
       <MdArrowBackIosNew className="arrowCount" onClick={handleClickDecrement}/>
        <p className="numberCount">{count}</p>
       <MdArrowForwardIos className="arrowCount" onClick={handleClickIncrement}/> 
      </div>
      <div>
        <button className="buttonAddToCart" onClick={handleClickAddToCart}>Agregar al Carrito</button>
      </div>     
   
    </div>
  );
};

export default ItemCount;

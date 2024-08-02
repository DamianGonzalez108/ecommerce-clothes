import { Link } from "react-router-dom";

import "./item.css";

const Item = ({ product }) => {
  return (
    <Link to={"/detail/" + product.id} className="card">
      <img src={product.image} alt="imagen de prenda" className="imgCard" />
      <p>{product.name}</p>
      <p>Precio:{product.price}</p>
    </Link>
  );
};

export default Item;

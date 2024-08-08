import Item from "./Item";

import "./itemList.css"

const ItemList = ({ products, search }) => {
  return (
    <div className="itemList">
      {products.filter((product) => {
        return search.toLowerCase() === "" ? product : product.name.toLowerCase().includes(search);
      })
      .map((product) => (
        <Item  key={product.id} product= {product} />
      ))}
    </div>
  );
};

export default ItemList;

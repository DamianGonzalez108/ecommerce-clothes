import ItemCount from "../itemcount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({product}) => {

const { addCart } = useContext(CartContext)

const addProduct = (count) => {
const productCart = {...product, quantity: count}
  addCart(productCart)
}

  return (
    <div>
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2>{product.name}</h2>
        <ItemCount stock={product.stock} addProduct={addProduct}/>
      </div>
    </div>
  )
}

export default ItemDetail
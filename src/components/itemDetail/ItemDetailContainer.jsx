import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import db from "../../db/db.js"
import { doc,getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {

const [product, setProduct] = useState({})
const {idProduct} = useParams()

const getProduct = () => {
 const productRef = doc(db, "products", idProduct)
 getDoc(productRef)
 .then((productDb)=> {
  const data = {id:productDb.id, ...productDb.data()}
  setProduct(data)
 })
 .catch((error) => console.log(error))
}

useEffect(() => {
getProduct()
}, [idProduct]);

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer
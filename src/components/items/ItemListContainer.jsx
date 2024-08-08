import { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import { CartContext } from "../../context/CartContext.jsx";

const ItemListContainer = () => {
  const {search} = useContext(CartContext)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();


  const getProducts = () => {
    setLoading(true);
    const productsRef = collection(db, "products");
    getDocs(productsRef).then((productsDb) => {
      const data = productsDb.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });
      setLoading(false);
      setProducts(data);
    });
  };

  const getProductsByCategory = async () => {
    setLoading(true)
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", idCategory));

    try {
      await getDocs(q).then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);

  return (
    <div>
      {loading ? <div>cargando...</div> :  <ItemList products={products} search={search} />}
    </div>
  );
};

export default ItemListContainer;

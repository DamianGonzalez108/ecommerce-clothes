import { Link } from "react-router-dom";
import "./category.css";

const Category = () => {
  return (
    <div>
      <div className="divsCategory">
        <Link to="/category/remerahombre">
          <img
            className="imgCategory"
            src="/public/images/remera-hombre.webp"
            alt=""
          />
        </Link>
        <Link to="/category/remeramujer">
          <img
            className="imgCategory"
            src="/public/images/remera-mujer.webp"
            alt=""
          />
        </Link>
      </div>
      <div className="divsCategory">
        <Link to="/category/pantalonhombre">
          <img
            className="imgCategory"
            src="/public/images/jean-hombre.webp"
            alt=""
          />
        </Link>
        <Link to="/category/pantalonmujer">
          <img
            className="imgCategory"
            src="/public/images/pantalon-mujer.webp"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Category;

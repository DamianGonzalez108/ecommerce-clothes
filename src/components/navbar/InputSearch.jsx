import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoSearch } from "react-icons/io5";

import "./inputSearch.css";

const InputSearch = () => {
  const { setSearch } = useContext(CartContext);

  const funtionscrollProyects = () => {
    window.scrollTo({
      top: 1650,
      behavior: "smooth",
    });
  };

  return (
    <div className="divInputSearch">
      <input
        onKeyDown={funtionscrollProyects('Enter')}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="inputSearch"
      />
      <button type="button" onClick={funtionscrollProyects} className="buttonSearch">
        <IoSearch size={35} />
      </button>
    </div>
  );
};

export default InputSearch;

import CartWidget from "./CartWidget";
import InputSearch from "./InputSearch";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="divLogo">
        <h2 className="titleNavbar">E</h2>
        <img
          src="/logoInicio.webp"
          alt="Imagen del logo de pagina"
          className="imgLogo"
        />
        <h2 className="titleNavbar">CLOTHES</h2>
      </div>
        <InputSearch />
        <CartWidget />
    </nav>
  );
};

export default Navbar;

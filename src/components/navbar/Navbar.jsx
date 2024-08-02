import CartWidget from "./CartWidget"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navBar">
        <div className="divLogo">
          <img src="/logoInicio.webp" alt="Imagen del logo de pagina" className="imgLogo"/>
        </div>
        <div className="divh1">
          <h1 className="title1">
            E CLOTHES
          </h1>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar
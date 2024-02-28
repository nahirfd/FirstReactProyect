import { CartWidget } from "../../common/CartWidget/CartWidget";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className="navStyle">
      <h3> Logo </h3>
      <ul>
        <li>Productos</li>
        <li>Promos</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
      <h4>Carrito</h4>
      <CartWidget />
    </div>
  );
};

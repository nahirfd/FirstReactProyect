import { CartWidget } from "../../common/CartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg botonera sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img
              src="imagenes/nav.png"
              alt="Logo Florentina yerba organica "
              class="scale-animation-log"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="pages/yerbas.html">
                  Yerbas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/promos.html">
                  Promos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/nosotros.html">
                  Nosotros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/contacto.html">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Carrito</h4>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

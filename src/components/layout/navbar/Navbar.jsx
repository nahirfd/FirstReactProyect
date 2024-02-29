import { CartWidget } from "../../common/CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg botonera sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand">
          <Link to="/">
            <img
              src="./src/img/nav.png"
              alt="Logo Florentina yerba organica "
              class="scale-animation-log"
            />
          </Link>
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
                <Link to="/">
                <a class="nav-link">
                  Home
                </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link>
                <a class="nav-link">
                  Promos
                </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link>
                <a class="nav-link">
                  Nosotros
                </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link>
                <a class="nav-link">
                  Contacto
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </div>
  );
};

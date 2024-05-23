import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {  handleLogout } from "../../api/ApiMethods";

function InNavbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      await handleLogout();
      logout(); 
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
  
<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">

  <div className="container-fluid">

    <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
      <a className="navbar-brand mt-2 mt-lg-0" >
        <img
          src="https://img.freepik.com/fotos-premium/muestra-icono-codigo-ondas-color-cian-naranja-textura_873925-1061527.jpg?w=740"
          height="25"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="/NewClient">Crear</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Auditoria">Auditoria</Link>
        </li>
        
      </ul>

    </div>

    <div className="d-flex align-items-center">

      <div className="">
        <p
          className="d-flex align-items-center"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            loading="lazy"
          />
          <a 
          onClick={handleLogoutClick}
          className="dropdown-item mx-2" href="#">Cerra Sesion</a>
        </p>
        
      </div>
    </div>
   
  </div>

</nav>

  );
}

export default InNavbar;

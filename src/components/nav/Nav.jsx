import React from "react";
import "./Nav.css";

const Nav = () =>{
    return(
        <header>
            <div className="logo">💈</div>
        <nav className="navbar">
        <ul>
            <li><a href="http://localhost:3000">Inicio</a></li>
            <li><a href="http://localhost:3000/nosotros">Nosotros</a></li>
            <li><a href="http://localhost:3000/servicios">Servicios</a></li>
            <li><a href="http://localhost:3000/micuenta">Mi Cuenta</a></li>
            <li><a className="promos" href="http://localhost:3000/promos">⚠ Promos ⚠</a></li>
        </ul>
    </nav>
        </header>
    )
};

export default Nav;
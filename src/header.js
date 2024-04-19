import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="logo.png" alt="Logo" />
                <h1>LAB04</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

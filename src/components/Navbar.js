import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        <a className="navbar-brand" href="#">PELISPLUS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src="https://static.vecteezy.com/system/resources/previews/010/160/638/non_2x/cinema-camera-icon-sign-symbol-design-free-png.png" 
         class="sFlh5c pT0Scc iPVvYb" 
         style={{ objectFit: 'cover', maxHeight: '45px' }} 
         alt="First slide"/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#carousel">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">Peliculas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#register">Series</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
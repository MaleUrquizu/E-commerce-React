import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import './Pagina-principal.css';
import Carrito from '../funcionalidades/Carrito';
// import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
}

function Menu() {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div className="menu">
      <div className="header">
        <div className="burger-menu">
          <a href="user" className="burger-icon">
            {/* <img src="" alt="burger" /> */}
            🍔
          </a>
        </div>
        <div className="logo">
          <a href="index.html">
            {/* <img src="" alt="" /> */}
            📢
          </a>
        </div>
        <div className="right-align-elements">
          <div className="search-bar">
            {/* <img src="" alt="" className="searchIcon" /> */}
            🔎
            <input type="text" placeholder="Search..." className="searchInput" />
          </div>
          <div className="user">
            <a href="user">
              {/* <img src="" alt="user" /> */}
              👤
            </a>
          </div>
          <div className="cart">
            <a href="user" className="cart-icon" onClick={toggleCart}>
              {/* <img src="" alt="user" /> */}
              🛒
            </a>
          </div>
        </div>
      </div>
      <Carrito isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default Menu;

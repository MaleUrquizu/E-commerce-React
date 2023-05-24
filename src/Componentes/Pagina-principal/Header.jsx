import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'
import './Pagina-principal.css';
import Carrito from '../funcionalidades/Carrito';
import burguer from '../Pagina-principal/img-header/Hamburger_icon.svg.png'
import logo from '../Pagina-principal/img-header/logo.png'
import search from '../Pagina-principal/img-header/search.png'
import user from '../Pagina-principal/img-header/image 6.png'
import cart from '../Pagina-principal/img-header/image 5.png'

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
        <button className="burger-icon">
        <img src={burguer} alt="img-burger" />
        </button>
        </div>
        <div className="logo">
          <Link to="#">
          <img src={logo} alt="img-logo" />
          </Link>
        </div>
        <div className="right-align-elements">
          <div className="search-bar">
             <img src={search} alt="img-search" />
             <input type="text" placeholder="Search..." className="searchInput" />
          </div>
          <div className="user">
            <Link to="#">
            <img src={user} alt="img-user" />
            </Link>
          </div>
          <div className="cartIcon">
            <button className="cart-icon" onClick={toggleCart}>
            <img src={cart} alt="img-cart" />
            </button>
          </div>
        </div>
      </div>
      <Carrito isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default Menu;

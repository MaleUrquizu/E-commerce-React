import React from 'react';
import '../funcionalidades/Carrito.css'
import empty from '../funcionalidades/img-carrito/empty.jpg'

function Carrito ({ isOpen, onClose, products }) {
  return (
    <div className={`cart-overlay ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <>
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <div className="cart-product" key={index}>
                <img className='cart-img' src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <h3>€{product.price}</h3>
                <button className="cart-close-product" onClick={onClose}>X</button>
              </div>
            ))
          ) : (
            <>
            <button className="cart-close" onClick={onClose}>
              X
            </button>
            <div className='cart-empty'>
            <img src={empty} alt="img-empty" />
            <p className='empty'>No hay productos en el carrito</p>  
            </div>
            
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Carrito;
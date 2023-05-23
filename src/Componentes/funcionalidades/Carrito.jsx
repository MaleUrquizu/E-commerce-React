import React from 'react';

function Carrito ({ isOpen, onClose, products }) {
  return (
    <div className={`cart-overlay ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <>
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <div className="cart-product" key={index}>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <h3>€{product.price}</h3>
              </div>
            ))
          ) : (
            <p>No hay productos en el carrito</p>
          )}
          <button className="cart-close" onClick={onClose}>
            X
          </button>
        </>
      )}
    </div>
  );
}

export default Carrito;
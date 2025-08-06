// src/pages/CartPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

// Mock cart data (replace with API call later)
const mockCartItems = [
  {
    id: 1,
    product: {
      name: 'Artistic Ceramic Vase',
      price: 85.0,
      image: 'https://via.placeholder.com/150?text=Vase',
    },
    quantity: 1,
  },
  {
    id: 2,
    product: {
      name: 'Ocean Wave Sculpture',
      price: 120.0,
      image: 'https://via.placeholder.com/150?text=Sculpture',
    },
    quantity: 1,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Simulate fetching cart from API
  useEffect(() => {
    // In future: fetch from /api/get_cart?cart_code=...
    setCartItems(mockCartItems);
  }, []);

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div className="cartpage">
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <Link to="/categories" className="continue-browsing">
            Continue Browsing
          </Link>
        </div>
      ) : (
        <>
          <div className="cartpage-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cartpage-item">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="cartpage-item-image"
                />
                <div className="cartpage-item-details">
                  <h3>{item.product.name}</h3>
                  <p className="price">BDT {item.product.price}</p>
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cartpage-summary">
            <h3>Subtotal: BDT {getTotalPrice()}</h3>
            <p>Shipping and taxes calculated at checkout</p>
            <Link to="/checkout">
              <button className="checkout-btn">Checkout</button>
            </Link>
            <Link to="/categories" className="continue-browsing-small">
              Continue Browsing
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
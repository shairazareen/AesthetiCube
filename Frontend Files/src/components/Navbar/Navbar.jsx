/// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSideCartOpen, setIsSideCartOpen] = useState(false); // ← New state

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleSideCart = () => {
    setIsSideCartOpen(!isSideCartOpen);
  };

  // Mock cart data (replace with real data later)
  const cartItems = [
    {
      id: 1,
      product: { name: 'Artistic Ceramic Vase', price: 85.0 },
      quantity: 1,
      image: 'https://via.placeholder.com/60',
    },
    {
      id: 2,
      product: { name: 'Ocean Wave Sculpture', price: 120.0 },
      quantity: 1,
      image: 'https://via.placeholder.com/60',
    },
  ];

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2);

  return (
    <nav className="navbar">
      {/* Left: Brand */}
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">AesthetiCube</Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-center">
        <Link to="/categories" className="navbar-link">Shop All</Link>
        <Link to="/policies" className="navbar-link">Policies</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>

      {/* Right: Profile & Cart */}
      <div className="navbar-right">
        {/* Profile Dropdown */}
        <div className="navbar-profile" onClick={toggleProfileDropdown}>
          <span className="profile-icon">👤</span>
          <span className="profile-arrow">▼</span>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <Link to="/account-settings" className="dropdown-item">Account Settings</Link>
              <Link to="/my-orders" className="dropdown-item">My Orders</Link>
              <hr className="dropdown-divider" />
              <button className="dropdown-item dropdown-logout">Log Out</button>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <div className="navbar-cart" onClick={toggleSideCart} style={{ cursor: 'pointer' }}>
          <span className="cart-icon">🛒</span>
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </div>
      </div>

      {/* ✅ Side Cart Overlay */}
      {isSideCartOpen && (
        <div className="side-cart-overlay" onClick={toggleSideCart}>
          <div className="side-cart" onClick={(e) => e.stopPropagation()}>
            <h2>Cart ({cartItemCount} item{cartItemCount !== 1 ? 's' : ''})</h2>
            <button className="close-button" onClick={toggleSideCart}>×</button>

            {/* Cart Items */}
            <div className="side-cart-items">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="side-cart-item">
                    <img src={item.image} alt={item.product.name} className="side-cart-item-image" />
                    <div className="side-cart-item-details">
                      <h3>{item.product.name}</h3>
                      <p>BDT {item.product.price}</p>
                      <div className="quantity">Qty: {item.quantity}</div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>

            {/* Cart Summary */}
            {cartItems.length > 0 && (
              <div className="side-cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>BDT {cartTotal}</span>
                </div>
                <p>Shipping and taxes calculated at checkout</p>
                <Link to="/thankyou" className="checkout-button">
                  <button>Checkout</button>
                </Link>
                <Link to="/categories" className="continue-browsing-link">
                  Continue Browsing
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
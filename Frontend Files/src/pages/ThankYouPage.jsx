// src/pages/ThankYouPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ThankYouPage.css';

const ThankYouPage = ({ orderDetails }) => {
  // Use fallback data if orderDetails is not provided
  const {
    customerName = "Valued Customer",
    orderNumber = "10000",
    products = [],
    subtotal = 0,
    deliveryFee = 0,
    tax = 0,
    total = 0,
    deliveryAddress = {},
    billingAddress = {}
  } = orderDetails || {};

  return (
    <div className="thank-you-page">
      <h1>Thank you, {customerName}</h1>
      <p>You'll receive a confirmation email soon.</p>
      <p>Order number: {orderNumber}</p>

      {/* Order Summary */}
      {products.length > 0 ? (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={product.image || 'https://via.placeholder.com/60'}
                      alt={product.name}
                      className="product-image"
                    />
                    <div>
                      <p>{product.name}</p>
                      {(product.options || []).map((option, idx) => (
                        <p key={idx}>{option}</p>
                      ))}
                    </div>
                  </td>
                  <td>{product.quantity || 1}</td>
                  <td>BDT {product.price?.toFixed(2) || '0.00'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="summary-details">
            <p>Note: Your customer's note will show here.</p>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>BDT {subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery:</span>
              <span>{deliveryFee === 0 ? 'Free' : `BDT ${deliveryFee.toFixed(2)}`}</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>BDT {tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>BDT {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ) : (
        <p>No items in this order.</p>
      )}

      {/* Addresses */}
      <div className="addresses">
        <div className="address-section">
          <h3>Delivery Address</h3>
          <p>{deliveryAddress.name || 'John Doe'}</p>
          <p>{deliveryAddress.address || '123 Artisan Lane'}</p>
          <p>
            {deliveryAddress.city || 'New York'}, {deliveryAddress.state || 'NY'}, {deliveryAddress.zipCode || '10001'}
          </p>
          <p>{deliveryAddress.country || 'USA'}</p>
          <p>{deliveryAddress.phoneNumber || '+1 123-456-7890'}</p>
          <p>Estimated Delivery: 3-5 Business Days</p>
        </div>

        <div className="address-section">
          <h3>Billing Address</h3>
          <p>{billingAddress.name || 'John Doe'}</p>
          <p>{billingAddress.address || '123 Artisan Lane'}</p>
          <p>
            {billingAddress.city || 'New York'}, {billingAddress.state || 'NY'}, {billingAddress.zipCode || '10001'}
          </p>
          <p>{billingAddress.country || 'USA'}</p>
          <p>{billingAddress.phoneNumber || '+1 123-456-7890'}</p>
        </div>
      </div>

      {/* Continue Browsing Button */}
      <Link to="/categories" className="continue-browsing">
        Continue Browsing
      </Link>
    </div>
  );
};

export default ThankYouPage;
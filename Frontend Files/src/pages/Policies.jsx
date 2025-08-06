// src/pages/Policies/Policies.jsx
import React from 'react';
import '../styles/Policies.css';

const Policies = () => {
  return (
    <div className="policies-page">
      <div className="policies-container">
        <h1>Policies</h1>
        
        <p className="intro-text">
          Below you'll find all the important information about shopping with AesthetiCube. 
          Please feel free to explore each section to understand our practices and your rights as a customer.
        </p>

        <div className="policies-list">
          <div className="policy-item">
            <h2>Privacy Policy</h2>
            <p>Information on how your personal data is collected, used, and protected.</p>
            <a href="/privacy-policy" className="policy-link">Read Privacy Policy</a>
          </div>

          <div className="policy-item">
            <h2>Shipping Policy</h2>
            <p>Information about delivery times, shipping methods, and order processing.</p>
            <a href="/shipping-policy" className="policy-link">Read Shipping Policy</a>
          </div>

          <div className="policy-item">
            <h2>Terms & Conditions</h2>
            <p>Information outlining the rules for using our website and making purchases.</p>
            <a href="/terms-and-conditions" className="policy-link">Read Terms & Conditions</a>
          </div>

          <div className="policy-item">
            <h2>Refund & Return Policy</h2>
            <p>Information about returns, exchanges, and eligibility for refunds.</p>
            <a href="/refund-policy" className="policy-link">Read Refund & Return Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
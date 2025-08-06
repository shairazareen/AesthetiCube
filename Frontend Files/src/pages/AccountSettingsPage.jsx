// src/pages/AccountSettingsPage.js
import React, { useState } from 'react';
import "../styles/AccountSettingsPage.css";

const AccountSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('my-account');

  // Mock user data (replace with real API data later)
  const userData = {
    firstName: 'Shaira',
    lastName: 'Islam',
    email: 'shairazar@gmail.com',
    phoneNumber: '',
    addresses: [],
    paymentMethods: [
      {
        cardType: 'Mastercard',
        cardNumber: 'XXXX-XXXX-XXXX-2751',
        expirationDate: '07/2026',
        cardholderName: 'John Doe',
      },
      {
        cardType: 'Visa',
        cardNumber: 'XXXX-XXXX-XXXX-2831',
        expirationDate: '08/2027',
        cardholderName: 'John Doe',
      },
    ],
  };

  return (
    <div className="account-settings-page">
      <h1>Account Settings</h1>

      {/* Tabs */}
      <nav className="tabs">
        <button
          className={`tab ${activeTab === 'my-account' ? 'active' : ''}`}
          onClick={() => setActiveTab('my-account')}
        >
          My Account
        </button>
        <button
          className={`tab ${activeTab === 'my-addresses' ? 'active' : ''}`}
          onClick={() => setActiveTab('my-addresses')}
        >
          My Addresses
        </button>
        <button
          className={`tab ${activeTab === 'my-wallet' ? 'active' : ''}`}
          onClick={() => setActiveTab('my-wallet')}
        >
          My Wallet
        </button>
      </nav>

      {/* Tab Content */}
      {activeTab === 'my-account' && (
        <div className="tab-content">
          <h2>Account</h2>
          <p>View and edit your personal info below.</p>

          <form>
            <label>
              First Name:
              <input type="text" value={userData.firstName} />
            </label>
            <label>
              Last Name:
              <input type="text" value={userData.lastName} />
            </label>
            <label>
              Phone:
              <input type="tel" value={userData.phoneNumber} />
            </label>
            <button type="submit">Update Info</button>
          </form>
        </div>
      )}

      {activeTab === 'my-addresses' && (
        <div className="tab-content">
          <h2>My Addresses</h2>
          <p>Add and manage the addresses you use often.</p>

          {userData.addresses.length > 0 ? (
            <ul>
              {userData.addresses.map((address, index) => (
                <li key={index}>
                  {address.street}, {address.city}, {address.state}, {address.zipCode}
                  <button>Manage</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven't saved any addresses yet.</p>
          )}
          <button>Add New Address</button>
        </div>
      )}

      {activeTab === 'my-wallet' && (
        <div className="tab-content">
          <h2>Wallet</h2>
          <p>Save your payment details for faster checkout.</p>

          {userData.paymentMethods.length > 0 ? (
            <ul>
              {userData.paymentMethods.map((method, index) => (
                <li key={index}>
                  <img src={`https://via.placeholder.com/40?text=${method.cardType}`} alt={method.cardType} />
                  {method.cardType} ({method.cardNumber.slice(-4)})
                  <span>Expiration date: {method.expirationDate}</span>
                  <span>Cardholder: {method.cardholderName}</span>
                  <button>Manage</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No payment methods added.</p>
          )}
          <button>+ Add Payment Method</button>
        </div>
      )}
    </div>
  );
};

export default AccountSettingsPage;
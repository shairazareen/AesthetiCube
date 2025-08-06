// src/pages/MyOrdersPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MyOrdersPage.css';

const MyOrdersPage = () => {
  // Mock order data (replace with real API call later)
  const orders = [
    {
      id: 1,
      orderNumber: 'ORD-12345',
      date: '2023-10-05',
      total: 120.0,
      status: 'Processing',
    },
    {
      id: 2,
      orderNumber: 'ORD-67890',
      date: '2023-10-03',
      total: 85.0,
      status: 'Delivered',
    },
  ];

  return (
    <div className="my-orders-page">
      <h1>My Orders</h1>
      <p>View your order history or check the status of a recent order.</p>

      {/* Order List */}
      {orders.length > 0 ? (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <h2>Order #{order.orderNumber}</h2>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Total:</strong> BDT {order.total.toFixed(2)}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <Link to="/categories" className="start-browsing">
            Start Browsing
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
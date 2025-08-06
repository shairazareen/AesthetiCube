// src/pages/ShippingPolicyPage.jsx
import React from 'react';
import '../styles/ShippingPolicyPage.css'; // Import the shared CSS file

const ShippingPolicyPage = () => {
  return (
    <div className="shipping-policy-container">
      {/* Header Section */}
      <div className="shipping-policy-header">
        <h1 className="shipping-policy-title">Shipping</h1>
        <h2 className="shipping-policy-subtitle">Policy</h2>
      </div>

      {/* Content Section */}
      <div className="shipping-policy-content">
        <p className="shipping-policy-text">
          This Shipping Policy ("Policy") governs the shipment and delivery of products purchased through the AesthetiCube website ("Site"). By placing an order through the Site, you ("Customer", "you", or "your") acknowledge and agree to be bound by the terms and conditions set forth herein. This Policy is incorporated by reference into our Terms and Conditions.
        </p>

        <p className="shipping-policy-heading">Order Processing and Fulfillment</p>
        <p className="shipping-policy-text">
          All orders are subject to acceptance and availability. Upon successful placement of an order, the Customer will receive an email confirmation acknowledging receipt of the order. Such confirmation does not constitute acceptance of the order, but merely confirms that the request has been received. AesthetiCube reserves the right to accept or decline any order at its sole discretion.
        </p>
        <p className="shipping-policy-text">
          Orders are typically processed within one (1) to two (2) business days, excluding weekends and statutory holidays, unless otherwise indicated. Processing times may be extended in periods of high demand or during promotional campaigns.
        </p>

        <p className="shipping-policy-heading">Shipping Methods and Delivery Timeframes</p>
        <p className="shipping-policy-text">
          Shipping services are rendered via third-party courier partners. The estimated delivery timeframes shall vary depending on the destination, nature of the item, and carrier availability. While AesthetiCube endeavors to meet the estimated delivery timelines, such dates are not guaranteed and shall not be binding.
        </p>
        <p className="shipping-policy-text">
          We disclaim any and all liability for delivery delays caused by weather conditions, customs procedures, labor disputes, transportation failures, or any other force majeure events beyond our reasonable control.
        </p>

        <p className="shipping-policy-heading">Shipping Fees and Charges</p>
        <p className="shipping-policy-text">
          Applicable shipping charges will be clearly disclosed at the time of checkout. Any duties, taxes, or import fees applicable to international shipments shall be the sole responsibility of the Customer and may be collected at the time of delivery by the designated customs authority.
        </p>
        <p className="shipping-policy-text">
          Free shipping promotions, if offered, are subject to limitations and may be discontinued at any time without prior notice.
        </p>

        <p className="shipping-policy-heading">Risk of Loss and Title</p>
        <p className="shipping-policy-text">
          All items purchased from AesthetiCube are made pursuant to a shipment contract. Risk of loss and title for the products shall pass to the Customer upon AesthetiCube's delivery of the merchandise to the carrier. Accordingly, AesthetiCube shall not be held liable for any loss, theft, or damage that occurs subsequent to such transfer.
        </p>

        <p className="shipping-policy-heading">Address Accuracy and Delivery Failures</p>
        <p className="shipping-policy-text">
          The Customer is solely responsible for providing accurate, complete, and current shipping information at the time of purchase. AesthetiCube shall not be held liable for misdelivery, failed delivery attempts, or return shipments arising from inaccurate or incomplete address details.
        </p>
        <p className="shipping-policy-text">
          In the event that a package is returned due to an incorrect address or unsuccessful delivery, any additional fees for reshipment shall be borne by the Customer. AesthetiCube reserves the right to withhold reshipment until such fees are paid in full.
        </p>

        <p className="shipping-policy-heading">Service Interruptions and Limitations</p>
        <p className="shipping-policy-text">
          AesthetiCube reserves the right to suspend, restrict, or terminate shipping services to certain geographic locations at its sole discretion. We further reserve the right to modify or discontinue shipping options without prior notice where operationally necessary.
        </p>

        <p className="shipping-policy-heading">Contact</p>
        <p className="shipping-policy-text">
          For inquiries regarding shipping, tracking, or delivery issues, you may contact us at <a href="mailto:support@aestheticube.com" className="privacy-policy-link">support@aestheticube.com</a>.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
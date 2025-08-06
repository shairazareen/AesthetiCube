// src/pages/RefundPolicyPage.jsx
import React from 'react';
import '../styles/RefundPolicyPage.css'; // Import the shared CSS file

const RefundPolicyPage = () => {
  return (
    <div className="refund-policy-container">
      {/* Header Section */}
      <div className="refund-policy-header">
        <h1 className="refund-policy-title">Refund</h1>
        <h2 className="refund-policy-subtitle">Policy</h2>
      </div>

      {/* Content Section */}
      <div className="refund-policy-content">
        <p className="refund-policy-text">
          This Refund Policy ("Policy") governs the conditions under which AesthetiCube ("we," "us," or "our") may issue refunds to customers ("you," "your," or "User") in relation to goods purchased through our website ("Site"). By placing an order on the Site, you acknowledge that you have read, understood, and agreed to be bound by the terms outlined herein.
        </p>

        <p className="refund-policy-heading">Eligibility for Refunds</p>
        <p className="refund-policy-text">
          Refund requests shall be considered only where the merchandise received by the customer is materially defective, damaged during shipment, or materially inconsistent with the description published on the Site at the time of purchase. To be eligible, refund requests must be submitted within a commercially reasonable time frame, not exceeding seven (7) calendar days from the date of delivery, unless a longer duration is mandated by applicable consumer protection laws.
        </p>

        <p className="refund-policy-heading">Condition of Returned Goods</p>
        <p className="refund-policy-text">
          In order to process a refund, the product must be returned in its original condition, unused, unaltered, and accompanied by the original packaging and proof of purchase. We reserve the right to inspect returned items and determine, at our sole discretion, whether the returned goods meet the criteria for refund eligibility. Any product returned in a condition inconsistent with the above may be rejected and sent back to the customer at their expense.
        </p>

        <p className="refund-policy-heading">Refund Method and Timing</p>
        <p className="refund-policy-text">
          Approved refunds shall be processed using the original method of payment. Processing times may vary depending on your financial institution, and we make no representations or warranties regarding the time frame in which the refund will reflect in your account. Shipping fees, handling charges, and applicable taxes are non-refundable unless otherwise required by law.
        </p>

        <p className="refund-policy-heading">Exclusions and Limitations</p>
        <p className="refund-policy-text">
          Certain items may be deemed final sale and are therefore ineligible for return or refund. These include, but are not limited to, personalized, customized, or made-to-order items. Additionally, refund requests will not be entertained in instances of buyer's remorse, change of preference, or minor color and texture variations inherent in artistic or handcrafted goods.
        </p>

        <p className="refund-policy-heading">Modifications to This Policy</p>
        <p className="refund-policy-text">
          We reserve the right to amend, modify, or terminate this Policy at any time, without prior notice, in our sole and absolute discretion. Such modifications shall become effective immediately upon posting to the Site. Continued use of the Site or failure to cancel an order after any changes to this Policy shall constitute your acceptance of such changes.
        </p>

        <p className="refund-policy-heading">Governing Law</p>
        <p className="refund-policy-text">
          This Policy shall be governed by, construed, and enforced in accordance with the laws of the jurisdiction in which AesthetiCube is established, without regard to its conflict of laws principles. Any disputes arising under or in connection with this Policy shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.
        </p>

        <p className="refund-policy-heading">Contact Us</p>
        <p className="refund-policy-text">
          You may contact us with any questions regarding this Policy at <a href="mailto:support@aestheticube.com" className="privacy-policy-link">support@aestheticube.com</a>.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
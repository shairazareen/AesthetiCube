import React from 'react';
import '../styles/TermsAndConditionsPage.css'; // Import the CSS file

const TermsAndConditionsPage = () => {
  return (
    <div className="policy-container">
      {/* Header Section */}
      <div className="policy-header">
        <h1 className="policy-title">Terms &</h1>
        <h2 className="policy-subtitle">Conditions</h2>
      </div>

      {/* Content Section */}
      <div className="policy-content">
        <p className="policy-text">
          These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("you", "your", or "User") and AesthetiCube ("we", "us", "our", or "Company") governing your access to and use of our website, digital platforms, and any services, products, or content provided through our website ("Site").
        </p>
        <p className="policy-text">
          By accessing or using the Site, you acknowledge that you have read, understood, and agree to be legally bound by these Terms. If you do not agree to these Terms, you must refrain from using the Site.
        </p>

        <p className="policy-heading">Eligibility to Use</p>
        <p className="policy-text">
          By using the Site, you represent and warrant that you are at least eighteen (18) years of age or the age of legal majority in your jurisdiction, and that you possess the legal capacity to enter into these Terms. Use of the Site by individuals under the age of majority is strictly prohibited unless with the supervision and consent of a parent or legal guardian.
        </p>

        <p className="policy-heading">Intellectual Property Rights</p>
        <p className="policy-text">
          All trademarks, service marks, trade names, logos, graphics, designs, artwork, images, text, code, and other materials displayed on or made available through the Site (collectively, the "Content") are the exclusive property of AesthetiCube or its licensors, and are protected under applicable intellectual property and copyright laws.
        </p>
        <p className="policy-text">
          You may not copy, reproduce, republish, upload, post, transmit, or distribute any Content in any manner without prior written permission from AesthetiCube. Unauthorized use of the Site or its Content is strictly prohibited and may result in legal action.
        </p>

        <p className="policy-heading">Account Registration and Termination</p>
        <p className="policy-text">
          You may be required to register an account to access certain features of the Site. You agree to provide accurate, current, and complete information and to update such information to maintain its accuracy.
        </p>
        <p className="policy-text">
          We reserve the right, in our sole discretion and without prior notice, to suspend or terminate your account or access to the Site at any time, for any reason, including but not limited to violations of these Terms, suspected fraud, or conduct that we deem harmful to our interests or the interests of other users.
        </p>

        <p className="policy-heading">Orders, Payment, and Pricing</p>
        <p className="policy-text">
          All purchases made through the Site are subject to availability and confirmation of the order price. Prices for our products are subject to change without notice. We reserve the right to refuse or cancel any order for any reason, including inaccuracies in product or pricing information, or suspected fraudulent activity.
        </p>
        <p className="policy-text">
          By placing an order, you represent and warrant that you have the legal right to use any payment method submitted, and you authorize us to charge the full order amount to the selected payment method.
        </p>

        <p className="policy-heading">Modifications to Offerings</p>
        <p className="policy-text">
          AesthetiCube reserves the right to modify, suspend, or discontinue any aspect of the Site, including the availability of any product, feature, or content, at any time and without prior notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance.
        </p>

        <p className="policy-heading">Warranties and Disclaimers</p>
        <p className="policy-text">
          All products and services are provided "as is" and "as available," without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We make no representations or warranties regarding the reliability, accuracy, or completeness of the Site content.
        </p>

        <p className="policy-heading">Limitation of Liability</p>
        <p className="policy-text">
          To the fullest extent permitted by law, in no event shall AesthetiCube, its directors, officers, employees, agents, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues arising out of or related to your use of the Site or products purchased therein.
        </p>

        <p className="policy-heading">Indemnification</p>
        <p className="policy-text">
          You agree to indemnify, defend, and hold harmless AesthetiCube, its affiliates, officers, agents, partners, and employees from and against any and all claims, liabilities, damages, losses, or expenses arising from your use of the Site, violation of these Terms, or infringement of any rights of a third party.
        </p>

        <p className="policy-heading">Governing Law and Jurisdiction</p>
        <p className="policy-text">
          These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Insert Location].
        </p>

        <p className="policy-heading">Amendments</p>
        <p className="policy-text">
          We reserve the right to update, modify, or replace these Terms at our sole discretion. Any changes will be posted on this page with an updated "Effective Date." Your continued use of the Site following any such changes constitutes your acceptance of the revised Terms.
        </p>

        <p className="policy-heading">Contact Information</p>
        <p className="policy-text">
          For any questions regarding these Terms and Conditions, you may contact us at <a href="mailto:support@aestheticube.com" className="policy-link">support@aestheticube.com</a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
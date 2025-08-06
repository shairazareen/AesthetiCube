// src/pages/PrivacyPolicyPage.jsx
import React from 'react';
import '../styles/PrivacyPolicyPage.css'; // Import the shared CSS file

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-container">
      {/* Header Section */}
      <div className="privacy-policy-header">
        <h1 className="privacy-policy-title">Privacy</h1>
        <h2 className="privacy-policy-subtitle">Policy</h2>
      </div>

      {/* Content Section */}
      <div className="privacy-policy-content">
        <p className="privacy-policy-text">
          AesthetiCube ("Company," "we," "us," or "our") is committed to respecting and protecting the privacy rights of all individuals whose personal information we collect, use, store, or disclose. This Privacy Policy ("Policy") sets forth the terms and conditions under which we collect, process, and protect personal data in connection with your access to or use of our website and associated services (collectively, the "Services"). By accessing or using our Services, you expressly acknowledge that you have read, understood, and consent to be bound by the terms of this Policy. If you do not agree to the terms herein, you must refrain from accessing or using our Services.
        </p>

        <p className="privacy-policy-heading">Information We Collect</p>
        <p className="privacy-policy-text">
          We may collect personal data directly from you when you engage with our Services, including but not limited to when you create an account, complete a purchase, participate in promotional activities, or communicate with us through designated support channels. The categories of personal data collected may include: full name, email address, telephone number, physical address, billing and shipping details, payment credentials, preferences, and account access details.
        </p>
        <p className="privacy-policy-text">
          Additionally, we may automatically collect certain technical and usage data when you interact with our Services. Such information may include Internet Protocol (IP) address, browser type and version, device identifiers, referring URLs, date and time of access, page interaction data, and information derived from the use of cookies and analogous tracking technologies.
        </p>

        <p className="privacy-policy-heading">Use of Information</p>
        <p className="privacy-policy-text">
          We process your personal data exclusively for lawful purposes, including but not limited to: facilitating the execution of commercial transactions; maintaining and managing your account; providing user support and responding to inquiries; improving the performance, design, and functionality of our website; delivering targeted content and marketing communications; ensuring compliance with legal and regulatory obligations; and detecting and preventing fraud, unauthorized access, or other unlawful conduct.
        </p>

        <p className="privacy-policy-heading">Disclosure of Personal Data</p>
        <p className="privacy-policy-text">
          We do not sell, lease, or otherwise disclose your personal data to third parties for their independent marketing purposes without your express consent. However, we may share your personal data under the following circumstances: with third-party service providers who are contractually obligated to act on our behalf and provide services such as payment processing, website hosting, analytics, logistics, and customer support; pursuant to a legal obligation or in response to lawful requests from public authorities, including to meet national security or law enforcement requirements; to protect or defend the rights, property, or safety of AesthetiCube, its users, or others; or in connection with a corporate transaction, such as a merger, acquisition, reorganization, or sale of assets, wherein such information may be transferred to a successor entity.
        </p>

        <p className="privacy-policy-heading">Data Security</p>
        <p className="privacy-policy-text">
          We employ appropriate technical and organizational measures to ensure the confidentiality, integrity, and availability of personal data under our control. These safeguards may include the use of encryption protocols (e.g., SSL/TLS), access restrictions, secure data storage practices, and regular security assessments. Notwithstanding the foregoing, no method of data transmission over the Internet or electronic storage is entirely secure; accordingly, we cannot warrant the absolute security of information provided through the Services.
        </p>

        <p className="privacy-policy-heading">Cookies and Tracking Technologies</p>
        <p className="privacy-policy-text">
          Our website utilizes cookies, web beacons, pixels, and similar technologies ("Cookies") to enhance your experience, evaluate website performance, understand user behavior, and deliver personalized content. These technologies may capture non-identifiable information such as browser type, user preferences, and interaction metrics. You may configure your browser settings to manage or disable Cookies; however, certain features of the Services may be limited or unavailable as a result.
        </p>

        <p className="privacy-policy-heading">Your Data Protection Rights</p>
        <p className="policy-text">
          Subject to applicable law, including but not limited to the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), you may have the right to request access to the personal data we maintain about you; to request correction or rectification of inaccurate data; to request erasure of your personal data in certain circumstances; to restrict or object to the processing of your data; and to request that your data be transmitted to a third party ("data portability"). To exercise any of these rights, please contact us using the information provided under the "Contact Us" section below. We will process valid requests within the timeframes prescribed by law.
        </p>

        <p className="privacy-policy-heading">Third-Party Websites</p>
        <p className="privacy-policy-text">
          The Services may contain links to external websites, platforms, or services that are not owned or operated by AesthetiCube. We do not assume responsibility for the privacy practices, data collection policies, or content of such third parties. Users are encouraged to review the privacy notices of any third-party sites they choose to access.
        </p>

        <p className="privacy-policy-heading">Children's Privacy</p>
        <p className="privacy-policy-text">
          Our Services are not directed to individuals under the age of eighteen (18), and we do not knowingly collect personal data from minors. If we become aware that a minor has submitted personal data without verified parental consent, we shall take immediate action to delete such data from our records. Parents or legal guardians who believe that their child has submitted data to us should contact us without delay.
        </p>

        <p className="privacy-policy-heading">International Data Transfers</p>
        <p className="privacy-policy-text">
          By accessing the Services from outside of your country of residence, you understand and acknowledge that your personal data may be transferred to and processed in jurisdictions with data protection laws that may be different or less protective than those in your home jurisdiction. By submitting your personal information, you consent to such international transfers, subject to appropriate safeguards where required by applicable law.
        </p>

        <p className="privacy-policy-heading">Contact Us</p>
        <p className="privacy-policy-text">
          If you have any questions, requests, or concerns regarding this Privacy Policy or the manner in which we process your personal data, you may contact us at: <a href="mailto:support@aestheticube.com" className="privacy-policy-link">support@aestheticube.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
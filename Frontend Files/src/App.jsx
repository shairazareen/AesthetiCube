// frontend_files/src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar/Navbar';
import Policies from './pages/Policies';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ContactPage from './pages/ContactPage';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import ThankYouPage from './pages/ThankYouPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import './App.css';

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        if (document.fonts) {
          await document.fonts.ready;
        }
        setFontsLoaded(true);
      } catch (error) {
        console.warn('Font loading failed, showing content anyway');
        setFontsLoaded(true);
      }
    };
    loadFonts();
  }, []);

  return (
    <div className={`App ${fontsLoaded ? 'fonts-loaded' : ''}`}>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;



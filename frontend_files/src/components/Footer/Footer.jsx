import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 sm:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-sky-500 pb-10">
        {/* Column 1 */}
        <div className=" border-r-sky-600">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Azza'hCrafts</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className=" text-sm">Do You Need Help?</Link>
            </li>
            <li>
              <Link to="/support" className="text-sm">For Any Help You May Call Us At</Link>
            </li>
            <li className="text-sm">+8809639279070</li>
            <li className="text-sm">
              Email: <Link to="/contact" className="text-sky-500 hover:underline">support@azzahcrafts.com</Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-sky-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:underline">Shop</Link></li>
            <li><Link to="/signIn" className="hover:underline">My Account</Link></li>
            <li><Link to="/" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="hover:underline">About Us</Link></li>
            <li><Link to="/order-tracking" className="hover:underline">Order Tracking</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-sky-500 mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/return" className="hover:underline">Delivery & Returns</Link></li>
            <li><Link to="/return" className="hover:underline">Refund Policy</Link></li>
            <li><Link to="/help-center" className="hover:underline">Get to Help Center</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:underline">Cookies Policy</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold text-sky-500 mb-4">Visit Our Stores</h3>
          <p className="text-sm mb-4">
            <strong>Display Center</strong><br />
            H-15, R-7/C, Sector-9, Uttara, Dhaka-1230.<br />
            Open: 10:00 AM – 10:00 PM (Everyday)
          </p>
          <p className="text-sm">
            <strong>Dhanmondi Branch</strong><br />
            Shop-227, 2nd Floor, Metro Shopping Mall, Dhanmondi-31, Dhaka.<br />
            Open: 10:30 AM – 08:30 PM (Closed on Tuesday)
          </p>
        </div>
      </div>

      {/* Follow us and Copyright row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6">
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <span className="text-white font-medium">Follow us:</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full hover:bg-sky-600">
            <FaInstagram className="text-white" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full hover:bg-sky-600">
            <FaFacebookF className="text-white" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full hover:bg-sky-600">
            <FaYoutube className="text-white" />
          </a>
        </div>

        <div className="text-sm text-center sm:text-right text-white">
          Copyright 2025 © Azza'hCrafts. All right reserved. Powered by {" "}
          <a href="https://azzahcraft.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">
            YourAzzah
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

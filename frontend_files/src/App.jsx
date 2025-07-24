import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import CartPage from './pages/CartPage/CartPage';
import Checkout from './pages/CheckOut/CheckOut';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';
import 'react-phone-input-2/lib/style.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Earrings from './pages/earrings/EarringsSection';
import ProductDetails from './pages/ProductDetails/ProductDetail';
import TrackOrder from './pages/TrackOrder/TrackOrder';
import OrderTracking from './pages/OrderTracking/OrderTracking';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import CookieConsent from './components/CookieConsent/CookieConsent';
import CookieConsentComponent from './components/CookieConsent/CookieConsent';
import HelpCenter from './pages/HelpCenterPage/HelpCenterPage';
import GetInspired from './pages/GetInpiredPage/HetInspiredPage';
import WishlistPage from './pages/Wishlist/WishlistPage';
import { WishlistProvider } from './context/WishlistContext';
import GiftsPage from './pages/Gifts/Gifts';
import ReturnOrders from './pages/ReturnOrders/ReturnOrders';
import Bags from './pages/Bags/Bags';
import KeyRings from './pages/KeyRings/KeyRings';
import HairClips from './pages/HairClip/HairClip';
import Neckpieces from './pages/NeckpiecesSet/Neckpieces';
import PaperCraftDIYForKids from './pages/PaperCraftDIYForKids/PaperCraftDIYForKids';
import Anklet from './pages/Anklet/Anklet';
import Brooch from './pages/Brooch/Brooch';
import ClawClips from './pages/ClawClips/ClawClips';
import Wallet from './pages/Wallet/Wallet';
import Sunglasses from './pages/Sunglasses/Sunglasses';
import Shoes from './pages/Shoes/Shoes';
import Candles from './pages/Candles/Candles';
import Vases from './pages/Vases/Vases';
import GiftCards from './pages/GiftCards/GiftCards';
import Bracelets from './pages/Bracelets/Bracelets';
import Rings from './pages/Rings/Rings';
import Bangles from './pages/Bangles/Bangles';


function App() {
  return (
        <WishlistProvider>

    <div className="flex flex-col min-h-screen">
            {/* <CookieConsent /> */}
                  <CookieConsentComponent />


            <ToastContainer position="top-right" autoClose={3000} />
            
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<CartPage />} />
        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/earrings" element={<Earrings />} />
            <Route path="/track" element={<TrackOrder />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/inspiration" element={<GetInspired />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/gifts" element={<GiftsPage />} />
            <Route path="/return" element={<ReturnOrders />} />
            <Route path="/hair-clips" element={<HairClips />} />
            <Route path="/neckpieces" element={<Neckpieces />} />
            <Route path="/bags" element={<Bags />} />
            <Route path="/key-rings" element={<KeyRings />} />
<Route path="/paper-craft-diy-for-kids" element={<PaperCraftDIYForKids />} />
<Route path="/category/anklet" element={<Anklet />} />
<Route path="/category/brooch" element={<Brooch/>} />
<Route path="/category/claw-clips" element={<ClawClips />} />
<Route path="/category/wallet" element={<Wallet />} />
<Route path="/category/sunglasses" element={<Sunglasses />} />
<Route path="/category/shoes" element={<Shoes />} />
<Route path="/category/candles" element={<Candles />} />
<Route path="/category/vases" element={<Vases />} />
<Route path="/category/gift-cards" element={<GiftCards />} />
<Route path="/category/bracelets" element={<Bracelets />} />
<Route path="/category/rings" element={<Rings />} />
<Route path="/category/bangles" element={<Bangles />} />


            





  {/* <Route path="/login" element={<Login />} /> */}

        </Routes>
      </main>
      <Footer />
    </div>
        </WishlistProvider>

  );
}

export default App;

// Checkout.jsx
import { useCart } from '../../context/CartContext';
import { FiTrash2 } from 'react-icons/fi';
import { FaPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import Select from 'react-select';
import 'react-phone-input-2/lib/style.css';

const statesByCountry = {
  bd: [
    { value: 'dhaka', label: 'Dhaka' },
    { value: 'chattogram', label: 'Chattogram' },
    { value: 'rajshahi', label: 'Rajshahi' },
    { value: 'khulna', label: 'Khulna' },
    { value: 'barishal', label: 'Barishal' },
    { value: 'sylhet', label: 'Sylhet' },
    { value: 'rangpur', label: 'Rangpur' },
    { value: 'mymensingh', label: 'Mymensingh' },
  ],
  us: [
    { value: 'california', label: 'California' },
    { value: 'texas', label: 'Texas' },
    { value: 'new_york', label: 'New York' },
    { value: 'florida', label: 'Florida' },
    { value: 'illinois', label: 'Illinois' },
  ],
  in: [
    { value: 'delhi', label: 'Delhi' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'tamil_nadu', label: 'Tamil Nadu' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'west_bengal', label: 'West Bengal' },
  ],
  uk: [
    { value: 'england', label: 'England' },
    { value: 'scotland', label: 'Scotland' },
    { value: 'wales', label: 'Wales' },
    { value: 'northern_ireland', label: 'Northern Ireland' },
  ],
};

const Checkout = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('bd');
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch('https://ipapi.co/json')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          setCountryCode(data.country_code.toLowerCase());
        }
      })
      .catch(() => setCountryCode('bd'));
  }, []);

  const handlePhoneChange = (value, country) => {
    setPhone(value);
    setCountryCode(country.countryCode);
    setState(null);
  };

  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const shippingCharge = 10;
  const taxRate = 0.1;
  const discountRate = 0.05;

  const subtotal = getSubtotal();
  const tax = subtotal * taxRate;
  const discount = subtotal * discountRate;
  const total = subtotal + shippingCharge + tax - discount;

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl font-bold mb-8">ArtCraft</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Customer Details</h2>
            <p className="text-sm text-gray-700">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:underline">
                Log In
              </a>
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <input type="email" placeholder="Email" required className="p-2 border rounded w-full" />
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-500">Email me with news and offers</span>
            </label>

            <div className="mt-4">
              <PhoneInput
                country={countryCode}
                value={phone}
                onChange={handlePhoneChange}
                enableSearch
                searchPlaceholder="Search country"
                inputClass="!w-full !py-4 !px-12 !border !rounded"
                buttonClass="!border !bg-white"
                dropdownClass="!bg-white"
                inputProps={{
                  name: 'phone',
                  required: true,
                }}
                containerClass="!w-full"
              />
            </div>
          </form>

          <p className="text-sm text-gray-600 pt-2">
            New customer? Receive 10% off your first order. Already have an account? You'll be prompted to log in.
          </p>
          <p className="text-sm text-gray-600">
            By providing your email, you agree to our{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms-of-service" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>.
          </p>

          {/* Shipping Address */}
          <div className="space-y-4">
            <p className="font-semibold text-lg">Shipping Address</p>

            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" required className="p-2 border rounded" />
              <input type="text" placeholder="Last Name" required className="p-2 border rounded" />
            </div>

            <input type="text" placeholder="Company (optional)" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Address" required className="w-full p-2 border rounded" />
            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full p-2 border rounded" />
            <input type="text" placeholder="City" required className="w-full p-2 border rounded" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PhoneInput
                country={countryCode}
                onlyCountries={Object.keys(statesByCountry)}
                enableSearch
                searchPlaceholder="Search country"
                onChange={(value, country) => {
                  setCountryCode(country.countryCode);
                  setState(null);
                }}
                disableCountryCode
                countryCodeEditable={false}
                inputClass="!w-full !py-4 !px-12 !border !rounded"
                buttonClass="!border !bg-white"
                dropdownClass="!bg-white"
                containerClass="!w-full"
                placeholder="Country/Region"
              />

              <Select
                options={statesByCountry[countryCode] || []}
                value={state}
                onChange={setState}
                placeholder="State"
                isSearchable
                isClearable
                isDisabled={!countryCode}
                classNamePrefix="react-select"
              />

              <input type="text" placeholder="Zip Code" required className="p-2 border rounded w-full" />
            </div>

            <div className="relative">
              <input type="text" placeholder="Phone (optional)" className="w-full p-2 border rounded" />
              <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
                title="We’ll only contact you if there’s an issue with your order."
              >
                <span className="text-gray-700 font-bold select-none">?</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <p className="font-semibold text-lg">Payment Method</p>
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" required />
                <FaPaypal className="text-blue-600" />
                PayPal
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" required />
                <FaCcVisa className="text-blue-800" />
                <FaCcMastercard className="text-red-600" />
                Credit/Debit
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" required />
                COD
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="Card Number" required className="p-2 border rounded col-span-2" />
              <input type="text" placeholder="Expiry Date" required className="p-2 border rounded" />
              <input type="text" placeholder="CVV" required className="p-2 border rounded" />
            </div>
          </div>
        </div>

        {/* Right Column – Cart Summary */}
        <div className="bg-white p-6 rounded shadow space-y-4">
          <h3 className="text-lg font-semibold">Cart ({cartItems.length})</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-3">
              <div className="flex items-center gap-4">
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                <FiTrash2 />
              </button>
            </div>
          ))}

          <input type="text" placeholder="Gift or Promo Code" className="w-full p-2 border rounded" />
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Apply</button>

          <div className="pt-4 border-t text-sm text-gray-600 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shippingCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount (5%)</span>
              <span>- ${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-md text-black border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

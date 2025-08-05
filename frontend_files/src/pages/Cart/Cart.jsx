// import { Link } from 'react-router-dom';
// import { useCart } from '../../context/CartContext';
// import { FiTrash2 } from 'react-icons/fi';

// const Cart = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();

//   const getTotal = () => {
//     return cartItems
//       .reduce((acc, item) => acc + item.price * item.quantity, 0)
//       .toFixed(2);
//   };

//   if (cartItems.length === 0) {
//     return <div className="p-6 text-center text-gray-500">Your cart is empty.</div>;
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cartItems.map((item) => (
//         <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-4">
//           <div className="flex items-center gap-4">
//             {/* ✅ Use first image from array */}
//             <img
//               src={item.images?.[0] || 'https://via.placeholder.com/80'}
//               alt={item.name}
//               className="w-20 h-20 rounded object-cover"
//             />
//             <div>
//               <h4 className="text-lg font-semibold">{item.name}</h4>

//               {/* Quantity Controls */}
//               <div className="flex items-center gap-2 mt-2">
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                   className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 text-xl"
//                 >
//                   −
//                 </button>
//                 <span className="text-md font-medium">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 text-xl"
//                 >
//                   +
//                 </button>
//               </div>

//               <p className="text-sky-500 font-bold mt-2">${item.price}</p>
//             </div>
//           </div>

//           <button
//             onClick={() => removeFromCart(item.id)}
//             className="text-red-500 hover:text-red-700 text-xl"
//           >
//             <FiTrash2 />
//           </button>
//         </div>
//       ))}

//       <div className="mt-6 text-right">
//         <h3 className="text-xl font-bold">Total: ${getTotal()}</h3>
//         <Link to="/checkout">
//           <button className="mt-4 bg-sky-500 text-white px-6 py-3 rounded hover:bg-sky-600">
//             Proceed to Checkout
//           </button>
//         </Link>
        
//       </div>
//     </div>
//   );
// };

// export default Cart;





import { useCart } from "../../context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const getTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Sync to localStorage to persist across refresh
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  if (cartItems.length === 0) {
    return <div className="p-6 text-center text-gray-500">Your cart is empty.</div>;
  }

  return (
    <div className="pt-[180px]">
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left: Cart Items */}
      <div className="md:col-span-2">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-300 text-gray-600">
              <th className="py-2">Product</th>
              <th className="py-2">Price</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="py-8 flex items-center gap-4">
                  <img
                    src={item.images?.[0] || "https://via.placeholder.com/80"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="font-medium">{item.name}</span>
                </td>
                <td className="py-4">$ {item.price.toFixed(2)}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 rounded text-lg hover:bg-black hover:text-white transition"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 rounded text-lg hover:bg-black hover:text-white transition"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-8 flex items-center gap-3">
                  $ {(item.price * item.quantity).toFixed(2)}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-white bg-red-500 hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center transition"
                    title="Remove"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Coupon Row */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center w-full sm:w-auto gap-2">
            <p>Cupone:</p>
            <input
              type="text"
              placeholder="Coupon code"
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 w-full sm:w-64 rounded focus:outline-none"
            />
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded transition">
              Apply coupon
            </button>
          </div>

          <button
            onClick={clearCart}
            className="bg-gray-200 hover:bg-black hover:text-white px-4 py-2 rounded transition"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Right: Cart Summary */}
      <div className="bg-gray-50 border-white rounded p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Cart totals</h3>
        <div className="flex justify-between py-2 border-b border-gray-300">
          <span>Subtotal</span>
          <span>$ {getTotal()}</span>
        </div>
        <div className="py-4 text-sm ">
          <p>Enter your address to view shipping options.</p>
          <Link to="/shipping" className="text-sky-600 hover:underline text-xs">
            Calculate shipping
          </Link>
        </div>
        <div className="flex justify-between text-lg font-bold py-2">
          <span>Total</span>
          <span className="text-black">$ {getTotal()}</span>
        </div>
        <Link to="/checkout">
          <button className="w-full mt-4 bg-sky-500 hover:bg-sky-600 text-white py-3 rounded transition">
            Proceed to checkout
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Cart;

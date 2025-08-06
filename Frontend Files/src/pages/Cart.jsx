import { useEffect, useState } from 'react';
import api from '../api';

export default function Cart() {
  const [cart, setCart] = useState(null);
  const cartCode = localStorage.getItem('cartCode');

  useEffect(() => {
    api.get(`/get_cart/?cart_code=${cartCode}`).then(res => setCart(res.data));
  }, [cartCode]);

  if (!cart) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6" style={{ color: '#FF6F61' }}>Your Cart</h2>
      {cart.items.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4">
          <img src={item.product.image} alt="" className="w-20 h-20 object-cover rounded"/>
          <div className="flex-1 px-4">
            <p className="font-semibold">{item.product.name}</p>
            <p className="text-sm text-neutral-500">Qty: {item.quantity}</p>
          </div>
          <p className="font-bold">${item.total}</p>
        </div>
      ))}
      <div className="text-right text-2xl font-bold mt-6">
        Total: ${cart.sum_total}
      </div>
      <button className="w-full mt-4 py-3 rounded-lg text-white"
              style={{ backgroundColor: '#6B5B95' }}>
        Checkout
      </button>
    </div>
  );
}
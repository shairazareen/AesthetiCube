import { useEffect, useState } from 'react';
import api from '../api';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products/').then(res => setProducts(res.data));
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </section>
  );
}



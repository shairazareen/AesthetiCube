export default function ProductCard({ product }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white group">
      <img src={product.image} alt={product.name}
           className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"/>
      <div className="p-4">
        <h3 className="font-semibold text-neutral-800 truncate">{product.name}</h3>
        <p className="text-sm text-neutral-500">{product.category}</p>
        <p className="text-lg font-bold mt-1" style={{ color: '#6B5B95' }}>
          ${product.price}
        </p>
      </div>
    </div>
  );
}
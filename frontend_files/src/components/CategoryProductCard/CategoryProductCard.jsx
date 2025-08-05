const CategoryProductCard = ({ product }) => {
  console.log(product.image); // Log the product's image array

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition p-2">
      <img 
        src={product.image && product.image[0]}  // Accessing the first image in the array
        alt={product.name} 
        className="w-full h-48 object-cover rounded-md" 
      />
      <div className="mt-2 px-2">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="mt-1 font-bold text-amber-600">${product.price}</div>
      </div>
    </div>
  );
};

export default CategoryProductCard;

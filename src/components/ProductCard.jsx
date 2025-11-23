const ProductCard = ({ product }) => {
  return (
    <div>

      <div className="relative border p-4 rounded shadow-md border-gray-200">

        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          ${product.price}
        </span>

        <img
          src={product.images?.[0]}
          className="w-full h-48 object-cover rounded"
          alt={product.title}
        />
        <h3 className="text-sm items-center flex justify-center font-semibold mt-3 text-white">{product.title}</h3>
        <p className="text-sm mt-2 text-white">
          {product.description.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

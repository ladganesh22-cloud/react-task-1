const ProductCard = ({ product }) => {
  return (
    <div>

      <div className="relative border p-4 rounded shadow-md border-gray-200">

        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          ${product.price}
        </span>

        <img
          src={product.images?.[0]}
          className="w-full h-48 object-cover rounded transition-all duration-500 group-hover:blur-sm"
          alt={product.title}
        />
        <div className="
          absolute inset-0
          bg-opacity-60
          opacity-0
          flex justify-center items-center
          transition-all duration-500
          group-hover:opacity-100
        ">
          <p className="text-white text-xl font-bold">
            ₹{product.price}
          </p>
        </div>
        <h3 className="text-sm items-center flex justify-center font-semibold mt-3 text-white">{product.title}</h3>
        <p className="text-sm mt-2 text-white">
          {product.description.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

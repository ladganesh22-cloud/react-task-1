import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  const clothes = products.filter(
    (p) => p.category?.name === "Clothes" || p.category?.name === "Cloth" || p.category?.name === "Clothe"
  );
  const electronics = products.filter(
    (p) => p.category?.name === "Miscellaneous"
  );
  const furnitures = products.filter(
    (p) => p.category?.name === "Furniture"
  );
  console.log(clothes, 'cloths');

  return (
    <div className="m-4 p-4">
      {clothes.length > 0 && (
        <>
          <h1 className="text-2xl font-bold text-center text-white uppercase p-2 mt-4 mb-4">
            Clothes
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            {clothes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}


      {electronics.length > 0 && (
        <>
          <h1 className="text-2xl font-bold text-center text-white uppercase p-2 mt-4 mb-4">
            Miscellaneous
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {electronics.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}

      {furnitures.length > 0 && (
        <>
          <h1 className="text-2xl font-bold text-center text-white uppercase p-2 mt-4 mb-4">
            Furniture
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {furnitures.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}

    </div>
  );
};

export default ProductGrid;

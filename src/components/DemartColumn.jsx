import React from "react";

const DemartBlog = ({ demart }) => {
  return (
    <div>
      {console.log(demart)}
      <div className="relative border p-4 rounded shadow-md border-gray-200">

        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          ${demart.price}
        </span>

        <img
          src={demart.images?.[0]}
          className="w-full h-48 object-cover rounded"
          alt={demart.title}
        />
        <h3 className="text-sm items-center flex justify-center font-semibold mt-3 text-white">{demart.title}</h3>
        <p className="text-sm mt-2 text-white">
          {demart.description.substring(0, 100)}
        </p>
      </div>
    </div>
  );
};

const DemartColumn = ({ dmartData }) => {
  const clothes = dmartData.filter(
    (each) => each.category?.name === "Clothes" || each.category?.name === "Cloth" || each.category?.name === "Clothe" || each.category?.name === "Cloths"
  );
  const electronics = dmartData.filter(
    (each) => each.category?.name === "Miscellaneous"
  );
  const furnitures = dmartData.filter(
    (each) => each.category?.name === "Furniture"
  );
  console.log(clothes, 'cloths');

  return (
    <div className="p-4">
      {clothes.length > 0 && (
        <>
          <h1 className="text-2xl font-bold text-center text-white uppercase p-2 mt-4 mb-4">
            Clothes
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            {clothes.map((demart) => (
              <DemartBlog key={demart.id} demart={demart} />
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
            {electronics.map((demart) => (
              <DemartBlog key={demart.id} demart={demart} />
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
            {furnitures.map((demart) => (
              <DemartBlog key={demart.id} demart={demart} />
            ))}
          </div>
        </>
      )}

    </div>
  );
};

export default DemartColumn;

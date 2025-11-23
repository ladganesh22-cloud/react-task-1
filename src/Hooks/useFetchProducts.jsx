import React, { useEffect, useState } from 'react'


const useFetchProducts = () => {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to Fetch")
        }
        const productData = await response.json();
        console.log(productData);
        setData(productData);
      }
      catch (e) {
        setError(e.message);
      }
      finally {
        setIsloading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isloading, error };
}

export default useFetchProducts

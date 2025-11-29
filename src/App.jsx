import { useState } from 'react'
import DemartColumn from './components/DemartColumn';
import useFetchProducts from './Hooks/useFetchProducts';


function App() {
  const { data, isloading, error } = useFetchProducts();

  if (isloading) {
    return (
      <div className="bg-black text-white flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black text-white flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className='bg-black'>
      <DemartColumn dmartData={data} />
    </div>
  )

}

export default App

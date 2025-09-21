import React, { useState, useEffect } from 'react'
import {PropagateLoader} from 'react-spinners'

 const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {  
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center '>
      {loading ? <PropagateLoader color="#36d7b7" /> : <div>
      <h1 className='text-3xl font-bold text-green-600 mb-3 text-center'>Order Successfull!</h1>
      <p> Your order is been successfully placed </p>
      </div>}
      
    </div>
  )
}
export default Success
import React from 'react'
import {AiFillHeart, AiFillStar} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'

// This component represents a single food card
// It displays an image, title, price, description, and a heart icon for favorites  

const FoodCard = ({id, name, price, desc, img, rating, handleToast}) => {
  const dispatch = useDispatch();
  return (
    <div className='bg-white shadow-md rounded-lg p-4 m-4 w-[300px] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 gap-2'
    >
    {/* font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg */}
      <img 
      src={img}
      alt=''
      className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' />
      <div className='flex justify-between items-center mt-2'>
        <h2 className="text-black font-semibold text-lg justify-between">{name}</h2>
        <span className='text-green-500'>₹{price}</span>
      </div>
      <p className='text-sm font-normal'>{ desc.slice(0, 50)}...</p>
      <div className='flex justify-between items-center mt-3'>
        <span className='flex justify-center items-center'> 
          <AiFillStar className='mr-1 text-yellow-400'/> {rating}
        </span>
        <button onClick={() =>{
          dispatch(addToCart({id, name, price, desc, img, rating, qty : 1}));
          handleToast(name);
          

        } }
        className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm cursor-pointer'> Add to Card</button>
      </div>
    </div>
  )
}

export default FoodCard
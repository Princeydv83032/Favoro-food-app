import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData' 
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';


// Assuming you have a data file with food items

// This component will render a list of food cards
// It can be extended to map through an array of food items and display each one  

const FoodItems = () => {
const category = useSelector((state) => state.category.category); 
const search = useSelector((state) => state.search.search.toLowerCase());
  const handleToast = (name) => {
  toast.success(`${name} added to cart!`, {
      duration: 2000,
      position: 'top-center',
      style: {
        background: '#4BB543',
        color: '#fff',
      },
    });
  };
  
  
  return (
   <>
   <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className='flex flex-wrap justify-center lg:justify-start gap-10 mx-6 my-10'>
      {FoodData.filter((food) => {
        if(category === "All"){
          return food.name.toLowerCase()
        }
        else {
          return category === food.category && food.name.toLowerCase()
        }

      }).map((food) =>(<FoodCard 
          key={food.id} // Assuming each food item has a unique id
          id={food.id} // Pass the title prop
          name={food.name} // Pass the image prop   
          price={food.price} // Pass the price prop
          desc={food.desc} // Pass the description prop
          rating={food.rating}
          img={food.img} // Pass the image prop
          handleToast={handleToast} // Pass the handleToast function as a prop
          
          />))
      
      }





      {/* {FoodData.map((food) => {
        return(
          <FoodCard 
          key={food.id} // Assuming each food item has a unique id
          id={food.id} // Pass the title prop
          name={food.name} // Pass the image prop   
          price={food.price} // Pass the price prop
          desc={food.desc} // Pass the description prop
          rating={food.rating}
          img={food.img} // Pass the image prop
          handleToast={handleToast} // Pass the handleToast function as a prop
          
          />
        );
      })} */}
        
    </div>
    </>
  )
}


export default FoodItems
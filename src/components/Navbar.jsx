import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice';

const Navbar = () => {
  const dispatch = useDispatch();
    // const handleSearch = (e) => {}
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-15 bg-white shadow-md rounded-lg'>
      <div>
        <h3 className=" text-xl font-bold text-gray-600">{new Date().toUTCString(0,16)}
        </h3>
        <h1 className="text-2xl font-bold ">Flavoro</h1>

      </div>
      <div>
        <input type="text" 
        placeholder="Search "
        id=''
        autoComplete='off'
        onChange={(e) => dispatch(setSearch(e.target.value))}
         className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full lg:w-[25vw]" />
      </div>
      </nav>
  )
}

export default Navbar
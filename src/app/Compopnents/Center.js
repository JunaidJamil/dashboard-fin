"use client"
import React, {useState} from 'react'
import Nav from './Centerworks/nav'
import Count from './Centerworks/Count'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Stats from './Centerworks/Stats';
const Center = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className='w-[792px] border-2 rounded-md border-grey-500'>
      <Nav/>
      <div className='mt-10'>
        <Count/>
      </div>
      <div className='mt-8'>
        <h1 className=' font-bold text-lg'>Statistics</h1>
        
        <p className=' flex items-center w-full'>
        See how your social media Channels are growing and measure your success{' '}
        <span
          className='cursor-pointer ml-12 text-blue-500 ml-1 gap-3 flex items-center'
          onClick={toggleDropdown}
          
        >
             This month {showDropdown ? <IoIosArrowDown /> : <IoIosArrowUp/>} 
        </span>
        {showDropdown && (
          <div className='absolute   left-[1300px]   mt-2 p-2 bg-white border rounded shadow'>
{/*            
            <p>This month</p>
            <p>Last month</p>
            <p>Previous quarter</p>
             */}
             
          </div>
        )}
      </p>

      </div>

  <div className='mt-5'>
   <Stats/>
  </div>

    </div>
  )
}

export default Center

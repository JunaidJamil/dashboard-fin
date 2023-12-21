import React from 'react'
import Image from 'next/image';
import { IoIosFemale } from "react-icons/io";
import { IoIosMale } from "react-icons/io";
import { FaTransgenderAlt } from "react-icons/fa";
const Leftside = () => {
  return (
    <>
    <div className='rounded-lg border-2 border-grey-200 bg-white'>
    
      <ul className='mt-2 flex justify-evenly  h-7 gap-24'>
      <li className='navItem text-lg font-bold '>Gender Borken</li>
      <li className='ml-20 cursor-pointer flex items-center mb-2'>...</li>
    </ul>

<div className=' flex justify-center gap-11'>
    <div>
      <Image
        src='/Assets/Images/circle.png'
        width={109}
    height={109}
      />
    </div>
    <div className='w-[200px]'>
       <ul className='flex flex-col  gap-y-2 justify-center pt-4'>
        <li className='flex gap-1   items-center'>
   <IoIosFemale/> Female  
   <span className='font-bold ml-4'>61%</span>
        </li>

        <li className='flex gap-1 items-center'>
   <IoIosMale/> Male  <span className='font-bold ml-8'>61%</span>

        </li>
        <li className='flex gap-1 items-center'>
   <FaTransgenderAlt/> Others  <span className='font-bold ml-4'>61%</span>
</li>
       </ul>
    </div>
</div>
</div>

<div className='mt-5 rounded-lg border-2 border-grey-200 bg-white'>
  
<ul className='mt-2 flex justify-evenly  h-7 gap-24'>
      <li className='navItem text-lg font-bold '>Gender Borken</li>
      <li className='ml-20 cursor-pointer flex items-center mb-2'>...</li>
    </ul>

<div className=' flex justify-center gap-11'>
    <div>
      <Image
        src='/Assets/Images/Lastwaves.png'
        width={464}
    height={178}
      />
        </div>
    </div>
   
    </div>
    
    </>
  )
}

export default Leftside

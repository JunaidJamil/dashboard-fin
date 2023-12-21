import React from 'react'
import Image from 'next/image';
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Nav = () => {
  return (
    <div className=' flex justify-center w-[297px] gap-3  items-center'>
        <div className=''>
       <FaBell/>
        </div>
        <div>
           <div className='w-[252px] flex gap-2 items-center bg-white border-1 border-grey-200'>

              <div>
                 <Image
                  src="/Assets/Images/person.png"
                  width={32}
                  height={32}
                  />  
              </div>
              <div>
                 <p className='text-sm'>Welcome back</p>
                 <h1 className='font-bold text-lg'>Drennan</h1>
              </div>
              <div className='ml-20'>
               <IoIosArrowDown/>
              </div>
                  </div>
               
          </div>       
<div>

</div>


    </div>
  )
}

export default Nav

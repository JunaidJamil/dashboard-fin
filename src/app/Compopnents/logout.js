import Image from 'next/image'
import React from 'react'
import { IoIosLogOut } from "react-icons/io";
const Logout = () => {
  return (
    <div>
     <Image src="/Assets/Images/logout.png" width={192} height={55} alt='Logo' />
       <button className='mt-10 flex ml-3 items-center justify-between w-full'>LogOut  < IoIosLogOut size={20} className=' mr-10' /></button>   
    </div>
  )
}

export default Logout

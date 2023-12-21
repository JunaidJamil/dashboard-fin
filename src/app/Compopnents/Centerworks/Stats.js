import React from 'react'
import Image from 'next/image'
import  "./Nav.css"
import Side from './Side'
import Leftside from './Leftside'
const Stats = () => {
  return (
    <div className='flex justify-center  gap-10'>

  <Side/>
<div className=' w-[384px] h-[326]'>


    <div className=' flex justify-center gap-4 w-[384px] '>
        <div className=' w-[184px] h-[161px] border-2 bg-white rounded-md'>
        <ul className='mt-2 flex ml-5 h-7 '>
          <li className='navItem text-sm'>Post Shares</li>
          <li className='ml-10 cursor-pointer flex items-center mb-4'>...</li>
        </ul>
        <div className=' flex items-center'>
          <h1 className='text-[25px] ml-5 font-bold'>31.6k</h1>
          <p className='text-[12px] mt-5 text-green-500'> -22% ^</p>
         </div> 
         <div >
         <Image 
           src="/Assets/Images/waves.png"
           width={180}
           height={10}
           className='object-cover z-10  '
         />
         </div>
        </div>
        <div className=' w-[184px] h-[161px] border-2 bg-white rounded-md'>
        <ul className='mt-2 flex ml-5 h-7 '>
          <li className='navItem text-sm'>New Follower</li>
          <li className='ml-10 cursor-pointer flex items-center mb-4'>...</li>
        </ul>
        <div className=' flex items-center'>
          <h1 className='text-[25px] ml-5 font-bold'>2.7k</h1>
          <p className='text-[12px] mt-5 text-green-500'> +8.5% ^</p>
         </div> 
         <div >
         <Image 
           src="/Assets/Images/waves.png"
           width={180}
           height={200}
           className='object-contain z-10  '
           />
         </div>
        </div>
       
           </div>

       <div className='mt-4 w-[384px] h-[149px] border-2 bg-white rounded-md'>
         
  <ul className=' w-[384px]'>
     <li className=' flex items-center gap-8 justify-center w-full'>
       Profile Visits 
       <Image 
           src="/Assets/Images/listwaves.png"
           width={140}
           height={32}
           className='object-cover '
           />
            <span className=' font-bold'>
              22.1k ^
            </span>
       
     </li>
     <li className=' flex items-center gap-8 justify-center w-full'>
       Profile Visits 
       <Image 
           src="/Assets/Images/listwave2.png"
           width={140}
           height={32}
           className='object-cover '
           />
            <span className=' font-bold'>
              22.1k ^
            </span>
       
     </li>
     <li className=' flex items-center gap-8 justify-center w-full'>
       Profile Visits 
       <Image 
           src="/Assets/Images/listwaves3.png"
           width={140}
           height={32}
           className='object-cover '
           />
            <span className=' font-bold'>
              22.1k ^
            </span>
       
     </li>
  </ul> 

       </div>

<div className='mt-4'>
  <h1 className='font-bold'>
    Audience
  </h1>
  <p>
    See your Audience BreakDown
  </p>
</div>
<div className='mt-6'>
   <Leftside/>
</div>
    </div>
          
    </div>
  )
}

export default Stats

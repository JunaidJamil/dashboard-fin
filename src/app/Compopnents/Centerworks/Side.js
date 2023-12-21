import React from 'react'
import Image from 'next/image'
import Post from './Post'

const Side = () => {
  return (
    <>
    <div className='h-auto'>

    <div className='w-[360px] h-[328px] border-2 bg-white rounded-md'>
    <ul className='mt-2 flex ml-7 h-7 gap-4'>
      <li className='navItem text-sm'>Reach</li>
      <li className='navItem text-sm'>Impressions</li>
      <li className='navItem text-sm'> New Folower</li>
      <li className='ml-10 cursor-pointer flex items-center mb-5'>...</li>
    </ul>
     <div className='mt-6'>
      <h1 className='text-[50px] ml-5 font-bold'>1.05m</h1>
      <p className='ml-5 text-green-500'> +8.5% ^</p>
     </div> 
     <div >
     <Image 
       src="/Assets/Images/waves.png"
       width={355}
       height={200}
       className='object-cover z-10 absolute top-[50%]  '
       />
     </div>
   </div>
   <div className='mt-4'>
        <h1 className='font-bold'>
            Posts
        </h1>
        <p>
            Overview of your published Post 
        </p>
    </div>
   <div className='w-[360px] h-[auto] mt-6 border-2 bg-white rounded-md'>
    <ul className='mt-2 flex ml-7 h-7 gap-4'>
      <li className='navItem text-sm'>Latest Post</li>
      <li className='navItem text-sm'>Schedule Post</li>
      <li className='ml-20 cursor-pointer flex items-center mb-5'>...</li>

    </ul>
    
     <div className='overflow-y-auto'>
       
     <Post/>
       
     </div> 
     <div >
    
     </div>
   </div>

    
       </div>
       </>

  )
}

export default Side

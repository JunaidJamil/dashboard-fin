import React from 'react'
import { MdGroups2 } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Count = () => {

 const Data =[{
    title: 'Followers',
    rate: "592K",
    icons: <MdGroups2 size={20} style={{ color: '#1E2875'}}/>
  },
  {
    title: 'Followings',
    rate: "3.5K",
    icons: <FaUserPlus size={20} style={{ color: '#1E2875'}} />
 },
{
    title: 'Comments',
    rate: "2.9K",
    icons: <FaComments size={20} style={{ color: '#1E2875'}} />
 },
 {
    title: 'Likes',
    rate: "9.5K",
    icons: <FaHeart size={20} style={{ color: '#1E2875'}}/>
  }
]

  return (
    <div className='flex justify-center gap-10 w-full'>
     {Data.map((item, i) => (
        <div key={i} className='border-2 rounded-lg border-grey-500 flex justify-around gap items-center w-1/2 h-[80px] bg-white '>
            <div>
          <h1>{item.title}</h1>
          <h2 className=' font-bold text-xl'>{item.rate}</h2>
                </div>
                <div className='mb-9'>          
          {item.icons}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Count

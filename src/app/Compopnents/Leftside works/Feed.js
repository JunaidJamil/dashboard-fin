import React from 'react'
import Image from 'next/image'
const Feed = () => {


    const Chatting =[{

        id: 2,
      name: "Alex",
      picture: "/Assets/Images/Persons/1.png",
      latest_timestamp: "10:00 AM",
      lastChat:
      "Or maybe not, let me check logistics and call you. Give me sometime"
    },
    {
        id: 3,
        name: "Bob",
        picture: "/Assets/Images/Persons/2.png",
        latest_timestamp: "12:30 AM",
      lastChat: "Alright"
    },
    {
      id: 4,
      name: "Luke",
      picture: "/Assets/Images/Persons/3.png",
      latest_timestamp: "4:12 PM",
      lastChat: "I will look into it"
    },
    {
        id: 5,
      name: "Bane",
      picture: "/Assets/Images/Persons/4.png",
      latest_timestamp: "7:53 PM",
      lastChat: "Exactly my point!"
    },
    {
    id: 6,
      name: "Darth Vader",
      picture: "/Assets/Images/Persons/5.png",
      latest_timestamp: "1:09 PM",
      lastChat: "Not quite the same."
    },
    {
      id: 7,
      name: "Zach",
      picture: "/Assets/Images/Persons/6.png",
      latest_timestamp: "Yesterday",
      lastChat: "I thought that the event was over long ago"
    },
    {  id: 8,
        name: "Katie",
      picture: "/Assets/Images/Persons/7.png",
      latest_timestamp: "Yesterday",
      lastChat: "nothing"
    },

    {
      id: 9,
      name: "Chloe",
      picture: "/Assets/Images/Persons/8.png",
      latest_timestamp: "Wednesday",
      lastChat: "nothing yeah iw ant skljfj jk gvhn"
    },
    {
        id: 9,
        name: "Chloe",
        picture: "/Assets/Images/Persons/9.png",
        latest_timestamp: "Wednesday",
        lastChat: "nothing eys kn opb uiag jhg ivcv"
      },
      {
        id: 10,
        name: "Chloe",
        picture: "/Assets/Images/Persons/9.png",
        latest_timestamp: "Wednesday",
        lastChat: "nothing eys kn opb uiag jhg ivcv"
      },
      {
        id: 10,
        name: "Chloe",
        picture: "/Assets/Images/Persons/9.png",
        latest_timestamp: "Wednesday",
        lastChat: "nothing eys kn opb uiag jhg ivcv"
      }
]

  return (            
    <>
<div className='h-screen lg:h-auto lg:sticky lg:top-0 lg:left-0 lg:right-0 bg-white border-2 border-grey-200 overflow-y-auto'>

<div className="container overflow-y-auto p-4 h-[700px] lg:max-h-full w-[297px] lg:w-full">
{Chatting.map((item, i) => (
  <div className="flex pt-3 gap-3 ml-4" key={i}>
    <div>
      <Image src={item.picture} width={40} height={40} />
    </div>
    <div>
      <h1 className='font-bold'>
        {item.name} <span className='text-[10px] '>{item.latest_timestamp}</span>
      </h1>
      <p>{item.lastChat}</p>
    </div>
  </div>
))}
</div>
</div>
</>
)
}

export default Feed

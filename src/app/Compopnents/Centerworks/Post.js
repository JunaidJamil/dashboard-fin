import React from 'react';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";

const Post = () => {
  const messages = [
    {
      image: "/Assets/Images/Post1.png",
      icons: <CiHeart />,
      icons2: <CiSaveDown2 />,
      icons3: <FaRegComment />,
      Name: "Darren Sammy",
      des: "Anything he wants to write or something else like a shit",
    },
    {
      image: '/Assets/Images/Post2.png',
      icons: <CiHeart />,
      icons2: <CiSaveDown2 />,
      icons3: <FaRegComment />,
      Name: "Darren lafariya",
      des: "Anything he wants to write or something else like a shit",
    },
    {
      image: '/Assets/Images/Post1.png',
      icons: <CiHeart />,
      icons2: <CiSaveDown2 />,
      icons3: <FaRegComment />,
      Name: "Darren Sammy",
      des: "Anything he wants to write or something else like a shit",
    },
  ];

  return (
    <>
      <div className="container overflow-y-auto p-4">
        {messages.map((item, i) => (
          <div className="flex justify-center pt-3 gap-3 ml-4" key={i}>
            <div>
              <Image src={item.image} width={100} height={100} />
            </div>
            <div>
              <h1 className='font-bold'>{item.Name}</h1>
              <p>{item.des}</p>
              <ul className='flex justify-start gap-4'>
                <li className='flex items-center gap-1'>
                  20k {item.icons}
                </li>
                <li className='flex items-center gap-1'>
                  30k {item.icons2}
                </li>
                <li className='flex items-center gap-1'>
                  30k {item.icons3}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;

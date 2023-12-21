"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Logout from './logout';
import { MdOutlineDashboard } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { FaArrowUpRightDots, FaRocketchat } from 'react-icons/fa6';
import { FaWallet } from 'react-icons/fa';

const Right = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const data = [
    {
      icon: <MdOutlineDashboard size={20} />,
      tabs: 'Dashboard',
    },
    {
      icon: <SlCalender size={20} />,
      tabs: 'Calendar',
    },
    {
      icon: <FaArrowUpRightDots size={20} />,
      tabs: 'Analytics',
    },
    {
      icon: <FaWallet size={20} />,
      tabs: 'Analytics',
    },
    {
      icon: <FaRocketchat size={20} />,
      tabs: 'Analytics',
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sticky lg:left-[210px] top-0 lg:w-[224px] w-full lg:h-screen lg:h-auto flex flex-col justify-between bg-white border-2 rounded-lg border-grey-500 overflow-y-auto lg:overflow-y-visible ${isMenuOpen ? 'lg:hidden' : ''}`}>
      <div>
        <Image src="/Assets/Images/logout.png" width={152} height={55} alt='Logo' />
        <div className='lg:flex lg:flex-col mt-10'>
          {data.map((item, index) => (
            <ul
              className={`mt-5 h-auto ml-2 cursor-pointer ${
                index === activeTab ? 'bg-gray-200' : ''
              }`}
              style={{ backgroundColor: index === activeTab ? '#F5F5F5' : '' }}
              key={index}
              onClick={() => handleTabClick(index)}
            >
              <li className='flex items-center'>
                {item.icon}
                <p className='ml-2'>{item.tabs}</p>
                {index === activeTab && (
                  <span className='ml-2'>
                  
                    {'->'}
                  </span>
                )}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className='mt-6 mb-4'>
        <Logout />
      </div>
      {/* Hamburger menu button */}
      <div className='lg:hidden fixed top-4 right-4 cursor-pointer' onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
};

export default Right;

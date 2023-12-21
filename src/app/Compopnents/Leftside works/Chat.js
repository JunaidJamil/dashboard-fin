'use client'
import React, { useState } from 'react';
import Feed from './Feed';
import Mention from './Mention';

const Chat = () => {
  const [activeTab, setActiveTab] = useState('Activity');


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='h-screen lg:h-auto lg:sticky lg:top-0 lg:left-0 lg:right-0 bg-white border-2 border-grey-200 overflow-x-auto overflow-y-auto'>
        <ul className='mt-2 flex justify-center h-7 gap-9'>
          <li className={`navItem text-sm ${activeTab === 'Activity' ? 'active' : ''}`} onClick={() => handleTabClick('Activity')}>
            Activity Feed
          </li>
          <li className={`navItem text-sm ${activeTab === 'Mentions' ? 'active' : ''}`} onClick={() => handleTabClick('Mentions')}>
            Mentions
          </li>
        </ul>

        <div className="container overflow-y-auto p-4 max-h-[calc(100vh-80px)] lg:max-h-full w-[297px] lg:w-full">
          {activeTab === 'Activity' && (
           <Feed/>
          )}

          {activeTab === 'Mentions' && (
             <Mention/>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;

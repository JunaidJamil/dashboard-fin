import React from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { CiYoutube } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';

import  "./Nav.css"

const Nav = () => {
  return (
    <div className='flex justify-center align-center'>
      <ul className={`flex justify-center align-middle gap-5 navList`}>
        <li className={`flex items-center navItem h-12`}>All Channels</li>
        <li className={`flex items-center gap-1 navItem`}>
          <FaFacebookF /> FaceBook
        </li>
        <li className={`flex items-center gap-1 navItem`}>
          <FaInstagram /> Instagram
        </li>
        <li className={`flex items-center gap-1 navItem`}>
          <CiLinkedin /> Linkedin
        </li>
        <li className={`flex items-center gap-1 navItem`}>
          <CiYoutube /> Youtube
        </li>
        <li className={`flex items-center gap-1 navItem`}>
          <CiTwitter /> Twitter
        </li>
      </ul>
    </div>
  );
};

export default Nav;

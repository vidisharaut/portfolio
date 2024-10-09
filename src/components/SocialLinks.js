import React from 'react'
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const SocialLinks = () => {
  return (

        <ul className='social-links'>
            <li><a href='https://www.linkedin.com/in/vidisha-raut/' target='__blank'><FaLinkedin size={20}/></a></li>
            <li><a href='https://github.com/vidisharaut' target='__blank'><FaGithub size={20}/></a> </li>
            <li><a href='https://leetcode.com/u/vidisharaut83/' target='__blank'> <TbBrandLeetcode size={20}/></a></li>
        </ul>
  )
}

export default SocialLinks
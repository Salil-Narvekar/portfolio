import React from 'react'
import ResumeButton from '../../Components/ResumeButton';
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import socialPlatformUrls from '../../Urls/socialPlatformUrls';

const TopNav = () => {

  const navItems = [
    { path: socialPlatformUrls.gmailUrl, icon: <BiLogoGmail /> },
    { path: socialPlatformUrls.linkedInUrl, icon: <FaLinkedin /> },
    { path: socialPlatformUrls.gitHubUrl, icon: <FaGithub /> },
    { path: socialPlatformUrls.instagramUrl, icon: <RiInstagramFill /> },
  ]

  return (
    <div className='grid grid-flow-col gap-2 md:gap-3 lg:gap-3 justify-end content-center position fixed backdrop-blur-md z-10 w-full h-14 pr-3' data-aos='fade-left'>

      <ResumeButton />

      {
        navItems.map((navItems, index) => (
          <a key={index} href={navItems.path} className='text-xl md:text-2xl lg:text-3xl cursor-pointer hover:translate-y-1 hover:scale-110 duration-700' data-aos='flip-left'>
            {navItems.icon}
          </a>
        ))
      }
    </div>
  )
}

export default TopNav
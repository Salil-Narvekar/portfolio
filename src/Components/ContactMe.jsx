import React from 'react'
import SocialMedia from './SocialMedia'
import { FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className='grid justify-items-center h-dvh bg-violet-200' id="contact">
      Contact Me
      <SocialMedia SocialMediaIcon={<FaLinkedin />} href='https://www.linkedin.com/in/salil-narvekar-2a7a06280/' />
    </div>
  )
}

export default ContactMe
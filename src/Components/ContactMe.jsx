import React from 'react'
import PageTitle from './PageTitle'
import ContactForm from './ContactForm'
import ContactIcons from './ContactIcons'
import { ImLocation } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className='grid justify-items-center items-start h-dvh' id="contact">

      <div className='grid grid-rows-4 justify-items-center items-center h-full w-full'>

        <div className='row-span-1 grid justify-items-center items-center text-6xl font-serif font-bold h-full w-full'>
          <PageTitle title='Connect with Me' />
        </div>

        {/* <div className='row-span-2 grid grid-flow-col justify-items-center items-center h-full w-full'>
          <ContactIcons href='https://www.google.com/maps/place/Omkar+Builder/@18.9650257,72.8152597,20.54z/data=!4m6!3m5!1s0x3be7cfc36874f1cb:0x7f34679ac241d6c6!8m2!3d18.9650629!4d72.8150481!16s%2Fg%2F11sf0hxzr6?entry=ttu' icon={<ImLocation />} contactInfoText='Address' />
          <ContactIcons href='https://mail.google.com/mail/?view=cm&fs=1&to=narvekarsalil1106@gmail.com' icon={<BiLogoGmail />} contactInfoText='narvekarsalil1106@gmail.com' />
          <ContactIcons icon={<IoMdCall />} contactInfoText='9869757298' />
          <ContactIcons href='https://www.linkedin.com/in/salil-narvekar-2a7a06280/' icon={<FaLinkedin />} contactInfoText='LinkedIn' />
        </div> */}

        <div className='row-span-1 grid justify-items-center items-center h-full w-full'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactMe
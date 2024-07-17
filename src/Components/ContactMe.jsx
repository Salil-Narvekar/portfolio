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
    <div className='h-fit md:h-dvh lg:h-dvh w-full grid grid-rows-12 pt-20' id="Contact">

      <div className='row-span-2 md:row-span-3 lg:row-span-3 grid items-start w-full h-full'>
        <PageTitle
          title='Connect with Me'
          pageDiscriptionRequired='yes'
          pageDiscriptionLine1='Hello! I would like to leveraging my web development expertise for new opportunities.'
          pageDiscriptionLine2='Whether you have a project, a job offer, or simply wish to connect, I would be delighted to hear from you.'
        />
      </div>

      <div className='row-span-8 md:row-span-7 lg:row-span-7 h-full w-full 
        grid sm:grid-cols-4
        justify-self-center justify-items-center items-center'
      >

        <ContactIcons
          href='https://www.google.com/maps/place/Omkar+Builder/@18.9650257,72.8152597,20.54z/data=!4m6!3m5!1s0x3be7cfc36874f1cb:0x7f34679ac241d6c6!8m2!3d18.9650629!4d72.8150481!16s%2Fg%2F11sf0hxzr6?entry=ttu'
          icon={<ImLocation />}
          contactTitle='Address'
          contactInfoText='207, Omkar CHS, Tardeo, Mumbai - 400007'
        />

        <ContactIcons
          href='https://mail.google.com/mail/?view=cm&fs=1&to=narvekarsalil1106@gmail.com'
          icon={<BiLogoGmail />}
          contactTitle='Email Id'
          contactInfoText='narvekarsalil1106@gmail.com'
        />

        <ContactIcons
          icon={<IoMdCall />}
          contactTitle='Contact No.'
          contactInfoText='+91 9869757298'
        />

        <ContactIcons
          icon={<FaLinkedin />}
          contactTitle='LinkedIn.'
          contactInfoText='Salil Narvekar'
        />
      </div>

      <div className='row-span-2 h-full w-full grid justify-items-center items-center py-4 md:py-0 lg:py-0'>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe
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
    <div className='h-dvh w-full grid justify-items-center items-start pt-20' id="Contact">

      <div className='grid w-full h-fit'>
        <PageTitle
          title='Connect with Me'
          pageDiscriptionRequired='yes'
          pageDiscriptionLine1='Hello! I would like to leveraging my web development expertise for new opportunities.'
          pageDiscriptionLine2='Whether you have a project, a job offer, or simply wish to connect, I would be delighted to hear from you.'
        />
      </div>

      <div className='h-fit w-full grid 
        grid-flow-col grid-rows-2 gap-4
        md:grid-flow-col md:grid-rows-1 md:gap-4
        lg:grid-flow-col lg:grid-rows-1 lg:gap-0
        xl:grid-flow-col xl:grid-rows-1 xl:gap-0
        justify-items-start md:justify-items-center lg:justify-items-center 
        items-center'
      >

        <ContactIcons
          href='https://www.google.com/maps/place/Omkar+Builder/@18.9650257,72.8152597,20.54z/data=!4m6!3m5!1s0x3be7cfc36874f1cb:0x7f34679ac241d6c6!8m2!3d18.9650629!4d72.8150481!16s%2Fg%2F11sf0hxzr6?entry=ttu'
          icon={<ImLocation />}
          contactTitle='Address'
          contactInfoText='207, Omkar CHS, Tardeo'
          contactInfoTextLine2='Mumbai - 400007'
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
          contactInfoText='9869757298'
        />

        <ContactIcons
          icon={<FaLinkedin />}
          contactTitle='LinkedIn.'
        />
      </div>

      <div className='h-full w-full grid justify-items-center items-center'>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe
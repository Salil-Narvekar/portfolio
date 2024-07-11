import React from 'react'

const ContactIcons = ({ href, icon, contactTitle, contactInfoText, contactInfoTextLine2 }) => {
  return (
    <div className='grid justify-items-center items-center cursor-pointer h-full' onClick={() => window.open(href)}>

      <div className='grid justify-items-center items-center bg-slate-500 rounded-full 
        text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
        h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32'
      >
        {icon}
      </div>

      <div className='h-full w-full grid justify-items-center items-start'>
        <span className='text-xs md:text-sm lg:text-lg xl:text-lg font-bold'>{contactTitle}</span>
        <span className='text-xs md:text-xs lg:text-md xl:text-lg font-medium'>{contactInfoText}</span>
        <span className='text-xs md:text-xs lg:text-md xl:text-lg font-medium'>{contactInfoTextLine2}</span>
      </div>

    </div>
  )
}

export default ContactIcons
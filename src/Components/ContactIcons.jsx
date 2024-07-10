import React from 'react'

const ContactIcons = ({ href, icon, contactInfoText, contactInfoTextLine2, contactInfoTextLine3 }) => {
  return (
    <div className='grid grid-rows-12 justify-items-center items-center cursor-pointer h-full w-full' onClick={() => window.open(href)}>
      <div className='row-span-5 md:row-span-6 lg:row-span-6 grid justify-items-center items-center bg-slate-500 rounded-full text-2xl md:text-3xl lg:text-4xl xl:text-5xl h-full w-16 md:w-36 lg:w-40 xl:w-44'>
        {icon}
      </div>
      <div className='row-span-4 grid justify-items-center items-start text-xs md:text-sm lg:text-lg xl:text-lg font-bold'>
        <span>{contactInfoText}</span>
        <span>{contactInfoTextLine2}</span>
        <span>{contactInfoTextLine3}</span>
      </div>
    </div>
  )
}

export default ContactIcons
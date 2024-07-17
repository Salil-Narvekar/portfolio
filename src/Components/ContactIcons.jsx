import React from 'react'

const ContactIcons = ({ href, icon, contactTitle, contactInfoText }) => {
  return (
    <div className='grid sm:grid-rows-7 justify-items-center items-center h-full w-full' onClick={() => window.open(href)}>

      <div className='row-span-3 grid justify-items-center items-center h-full w-full'>
        <div className='grid justify-items-center items-center bg-gradient-to-b from-slate-500 to-slate-300
        rounded-full cursor-pointer shadow-xl shadow-slate-400 hover:scale-110 duration-700
        text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:text-4xl
        h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32'
        >
          {icon}
        </div>
      </div>

      <div className='row-span-1 grid justify-items-center items-center text-xs md:text-sm lg:text-lg xl:text-lg font-bold h-full w-full cursor-pointer'>
        {contactTitle}
      </div>

      <div className='row-span-3 text-center grid justify-items-center items-start h-full w-full text-xs md:text-xs lg:text-sm xl:text-lg font-bold font-semibold break-words whitespace-normal text-balance'>
        {contactInfoText}
      </div>

    </div>
  )
}

export default ContactIcons
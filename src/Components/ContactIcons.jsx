import React from 'react'

const ContactIcons = ({ href, icon, contactInfoText }) => {
  return (
    <div className='grid grid-rows-2 gap-1 cursor-pointer' onClick={() => window.open(href)}>
      <div className='grid justify-items-center items-center bg-slate-500 rounded-full border text-6xl'>
        {icon}
      </div>
      <div className='grid justify-items-center items-start text-xl'>
        {contactInfoText}
      </div>
    </div>
  )
}

export default ContactIcons
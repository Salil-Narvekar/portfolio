import React from 'react'

const Designation = ({ designation }) => {
  return (
    <div className='text-xs md:text-2xl lg:text-3xl font-medium font-sans text-slate-600'>
      I am a, {designation}
    </div>
  )
}

export default Designation
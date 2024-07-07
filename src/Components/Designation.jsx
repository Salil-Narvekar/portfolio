import React from 'react'

const Designation = ({ designation }) => {
  return (
    <div className='text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold font-sans'>
      {designation}
    </div>
  )
}

export default Designation
import React from 'react'

const Designation = ({ designation }) => {
  return (
    <div className='text-lg md:text-2xl lg:text-4xl font-semibold font-serif h-fit'>
      {designation}
    </div>
  )
}

export default Designation
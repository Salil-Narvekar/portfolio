import React from 'react'

const Name = ({ name }) => {
  return (
    <div className='text-3xl md:text-6xl lg:text-8xl font-bold font-serif h-fit'>
      {name}
    </div>
  )
}

export default Name
import React from 'react'

const Name = ({ name }) => {
  return (
    <div className='text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold font-serif text-purple-950'>
      {name}
    </div>
  )
}

export default Name
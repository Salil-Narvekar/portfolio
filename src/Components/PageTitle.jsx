import React from 'react'

const PageTitle = ({title}) => {
  return (
    <div className='text-xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold'>
        - {title} -
    </div>
  )
}

export default PageTitle
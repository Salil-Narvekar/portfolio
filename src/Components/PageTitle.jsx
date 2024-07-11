import React from 'react'

const PageTitle = ({ title, pageDiscriptionRequired, pageDiscriptionLine1, pageDiscriptionLine2 }) => {
  return (
    <div className='grid items-start font-semibold'>
      <div className='grid justify-items-start md:justify-items-center lg:justify-items-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-bold'>
        {title}
      </div>
      
      {
        pageDiscriptionRequired === 'yes' &&

        <div className='text-left md:text-center lg:text-center font-medium text-xs md:text-sm lg:text-lg xl:text-lg w-full'>
          <hr className='m-1 mr-10 ml-0 md:ml-10 lg:ml-10 lg:ml-20 lg:mr-20 border-black' />
          {pageDiscriptionLine1} <br />
          {pageDiscriptionLine2} <br />
        </div>
      }
    </div>
  )
}

export default PageTitle
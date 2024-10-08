import React from 'react'

const PageTitle = ({ title, pageDiscriptionRequired, pageDiscriptionLine1, pageDiscriptionLine2 }) => {
  return (
    <div className='grid items-start font-semibold text-balance'>
      <div className='grid justify-items-start md:justify-items-center lg:justify-items-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-purple-950 animate-fadeFromTop'>
        {title}
      </div>
      
      <hr className='m-1 mr-10 ml-0 md:ml-5 md:mr-5 lg:ml-20 lg:mr-20 border-slate-700 animate-zoomIn' />

      {
        pageDiscriptionRequired === 'yes' &&

        <div className='text-left md:text-center lg:text-center font-medium text-xs md:text-xs lg:text-sm xl:text-lg w-full text-slate-700 animate-fadeFromBottom'>
          {pageDiscriptionLine1} <br />
          {pageDiscriptionLine2} <br />
        </div>
      }
    </div>
  )
}

export default PageTitle
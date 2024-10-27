import React from 'react'

const Footer = () => {
    return (
        <div className='h-28 bg-gradient-to-b from-indigo-200 to-indigo-100 text-center text-slate-600 font-semibold text-balance'>
            <div className='text-xs md:text-sm lg:text-sm animate-fadeFromTop'> Copyright ©2024 All rights reserved | Built using React.js, Tailwind CSS & Material UI </div>
            <hr className='m-1 ml-10 mr-10 lg:ml-20 lg:mr-20 border-slate-400 animate-zoomIn' />
            <div className='text-sm md:text-md lg:text-lg animate-fadeFromBottom'> Designed & developed by Salil Narvekar </div>
        </div>
    )
}

export default Footer
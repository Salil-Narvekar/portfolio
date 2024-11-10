import React from 'react'

const Footer = () => {
    return (
        <div className='h-28 bg-gradient-to-b from-indigo-200 to-indigo-100 text-center text-slate-600 font-semibold text-balance overflow-hidden'>
            <div className='text-xs md:text-sm lg:text-sm' data-aos-offset="10" data-aos-mirror="true" data-aos='fade-down' data-aos-delay="200"> Copyright ©2024 All rights reserved | Built using React.js - Tailwind - Material UI - AOS library </div>
            <hr className='m-1 ml-10 mr-10 lg:ml-20 lg:mr-20 border-slate-400' data-aos-offset="10" data-aos-mirror="true" data-aos='flip-right' />
            <div className='text-sm md:text-md lg:text-md font-serif' data-aos-offset="10" data-aos-mirror="true" data-aos='fade-up' data-aos-delay="400"> Designed & developed by Salil Narvekar </div>
        </div>
    )
}

export default Footer
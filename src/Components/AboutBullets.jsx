import React from 'react'

const AboutBullets = ({ title, description }) => {
    return (
        <div
            className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-start 
            text-sm md:text-md lg:text-lg 
            h-full w-full 
            md:pl-12 lg:pl-12'
        >
            <div className='col-span-1 md:col-span-1 lg:col-span-1 grid items-center font-bold w-full h-full'>
                {title} {":"}
            </div>

            <div className='col-span-2 md:col-span-3 lg:col-span-4 grid items-center font-semibold text-slate-700 h-full w-full'>
                {description}
            </div>
        </div>
    )
}

export default AboutBullets
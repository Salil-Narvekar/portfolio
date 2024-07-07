import React from 'react'

const Resume = ({resumeUrl}) => {
    return (
        <div className='grid justify-items-center items-center rounded-md bg-slate-800 text-white text-sm md:text-md lg:text-lg xl:text-xl hover:scale-105 hover:translate-y-1 duration-500 cursor-pointer pr-2 pl-2'>
            <a href={resumeUrl}>Resume</a>
        </div>
    )
}

export default Resume
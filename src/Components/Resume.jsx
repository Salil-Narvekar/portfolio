import React from 'react'

const Resume = ({resumeUrl}) => {
    return (
        <div className='grid justify-items-center items-center rounded-md bg-gradient-to-r from-indigo-950 to-cyan-700 text-slate-300 hover:bg-gradient-to-l hover:text-white text-sm md:text-md lg:text-lg xl:text-lg hover:scale-105 hover:translate-y-1 duration-500 cursor-pointer xl:py-1 pr-2 pl-2 xl:pr-4 xl:pl-4'>
            <a href={resumeUrl}>Resume</a>
        </div>
    )
}

export default Resume
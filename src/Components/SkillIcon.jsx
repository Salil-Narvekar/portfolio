import React from 'react'

export const SkillIcon = ({icon}) => {
    return (
        <div className='text-lg md:text-2xl lg:text-3xl xl:text-4xl h-4 w-4 md:h-6 md:w-6 lg:h-12 lg:w-12 rounded-3xl drop-shadow-2xl hover:scale-105 hover:-translate-y-4 duration-500 cursor-pointer'>
            {icon}
        </div>
    )
}

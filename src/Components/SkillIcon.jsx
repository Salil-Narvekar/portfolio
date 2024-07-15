import React from 'react'

export const SkillIcon = ({ icon, name, setSkillKey }) => {
    return (
        <div
            className='relative group'
            onMouseEnter={() => setSkillKey(name)}
            onMouseLeave={() => setSkillKey('')}
        >
            <div className='text-xl md:text-3xl lg:text-4xl xl:text-4xl h-4 w-4 md:h-6 md:w-6 lg:h-12 lg:w-12 rounded-3xl drop-shadow-2xl hover:scale-105 hover:-translate-y-4 duration-500 cursor-pointer'>
                {icon}
            </div>
        </div>
    )
}

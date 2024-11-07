import React from 'react'

export const SkillIcon = ({ icon, name, setSkillName }) => {
    return (
        <div
            className='relative group'
            onMouseEnter={() => setSkillName(name)}
            onMouseLeave={() => setSkillName('')}
            data-aos-offset="80" data-aos-mirror="true" data-aos='flip-left' data-aos-duration="1500"
        >
            <div className='text-xl md:text-3xl lg:text-3xl xl:text-3xl h-6 w-6 md:h-7 md:w-7 lg:h-10 lg:w-10 content-center rounded-3xl drop-shadow-2xl hover:scale-105 hover:-translate-y-4 duration-500 cursor-pointer'>
                {icon}
            </div>
        </div>
    )
}

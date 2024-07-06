import React from 'react'
import Name from './Name'
import Designation from './Designation'

const About = () => {
    return (
        <div className='grid grid-rows-12 h-dvh bg-violet-200' id="about">

            <div className='row-span-2 h-full'></div>

            <div className='row-span-5 h-full text-right pr-2 lg:pr-10 py-4'>
                <div className='text-xs md:text-sm lg:text-3xl font-normal lg:mb-4'> Hello & Welcome visitors !! Myself,</div>
                <Name name='Salil Narvekar' />
                <Designation designation='Web Developer' />
            </div>

            <div className='row-span-5 h-full text-right' id="skills">
                Skills
            </div>
        </div>
    )
}

export default About
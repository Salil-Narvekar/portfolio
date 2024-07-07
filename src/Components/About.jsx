import React from 'react'
import Name from './Name'
import Designation from './Designation'
import Skills from './Skills'
import AboutDescription from './AboutDescription'

const About = () => {
    return (
        <div className='h-dvh bg-violet-200' id="about">

            <div className='h-1/5'></div>

            <div className='h-2/4 grid items-end pr-2 lg:pr-10 pl-10'>
                <div className='text-right'>
                    <div className='text-xs md:text-lg lg:text-2xl xl:text-3xl font-normal font-serif'> Hello & welcome visitor !! Myself,</div>
                    <Name name='Salil Narvekar' />
                    <Designation designation='Web Developer' />
                </div>

                <div className='grid justify-items-center items-center'>
                    <AboutDescription />
                </div>
            </div>

            <div className='h-1/4 lg:mt-10 grid justify-items-end items-end' id="skills">
                <div className='h-1/2'></div>
                <div className='pr-6'>
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default About
import React from 'react'
import Name from './Name'
import Designation from './Designation'
import Skills from './Skills'
import AboutDescription from './AboutDescription'

const Home = () => {
    return (
        <div className='h-dvh' id="home">

            <div className='h-1/5'></div>

            <div className='h-4/5 grid items-center'>

                <div className='sm:text-right lg:text-left'>
                    <div className='text-xs md:text-lg lg:text-2xl xl:text-3xl font-normal font-serif'> Hello & welcome visitor !! Myself,</div>
                    <Name name='Salil Narvekar' />
                    <Designation designation='Web Developer' />
                </div>

                <div className='grid justify-items-center items-center h-full'>
                    <AboutDescription />
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default Home
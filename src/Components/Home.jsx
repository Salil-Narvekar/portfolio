import React from 'react'
import Name from './Name'
import Designation from './Designation'
import Skills from './Skills'
import AboutDescription from './AboutDescription'

const Home = () => {
    return (
        <div className='h-dvh grid items-center pt-20' id="Home">

            <div className='h-full pt-20 text-left pl-2 md:pl-0 lg:pl-0'>
                <div className='text-xs md:text-lg lg:text-2xl xl:text-3xl font-normal text-slate-500 font-serif animate-fadeFromTop'> Welcome to my portfolio ! My name is,</div>
                <Name name='Salil Narvekar' />
                <Designation designation='React developer with Python background' />
            </div>

            <div className='h-full grid justify-items-start md:justify-items-start lg:justify-items-center 
                items-start md:items-start lg:items-start 
                text-center'
            >
                <AboutDescription />
                <Skills />
            </div>
        </div>
    )
}

export default Home
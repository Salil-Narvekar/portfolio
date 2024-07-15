import React from 'react'
import Navigation from './Navigation'
import TitleBar from './TitleBar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Certifications from './Certifications'
import ContactMe from './ContactMe'
import FooterMark from './FooterMark'

const PortfolioMain = () => {
    return (
        <div className='bg-purple-300/50'>

            <div className="grid grid-cols-11">

                <div className='position fixed z-10 w-full backdrop-blur-md pt-4 pb-2 pl-2 pr-4'>
                    <TitleBar />
                </div>

                <div className='col-span-1 pl-1 position fixed h-full'>
                    <Navigation />
                </div>

                <div className='col-span-10 col-start-2 pl-2 md:pl-0 lg:pl-0 h-fit'>
                    <Home />
                    <About />
                    <Projects />
                    <Certifications />
                    <ContactMe />
                    <FooterMark />
                </div>
            </div>
        </div>
    )
}

export default PortfolioMain
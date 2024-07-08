import React from 'react'
import Navigation from './Navigation'
import About from './About'
import Projects from './Projects'
import Education from './Education'
import ContactMe from './ContactMe'
import TitleBar from './TitleBar'
import FooterMark from './FooterMark'

const PortfolioMain = () => {
    return (
        <div className='bg-gradient-to-b from-violet-400 to-violet-300'>
            <div className='position fixed z-10 w-full backdrop-blur-md pt-4 pb-2 pl-2 pr-4'>
                <TitleBar />
            </div>

            <div className='position fixed z-0 h-full pl-2 pr-2'>
                <Navigation />
            </div>

            <div className="h-fit">
                <About />
                <Projects />
                <Education />
                <ContactMe />
            </div>
        </div>
    )
}

export default PortfolioMain
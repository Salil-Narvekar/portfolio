import React from 'react'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Education from './Education'
import ContactMe from './ContactMe'
import TitleBar from './TitleBar'

const PortfolioMain = () => {
    return (
        <div className='bg-gradient-to-b from-violet-400 to-violet-300'>

            <div className="grid grid-cols-11">

                <div className='position fixed z-10 w-full backdrop-blur-md pt-4 pb-2 pl-2 pr-4'>
                    <TitleBar />
                </div>

                <div className='col-span-1 pl-1 position fixed '>
                    <Navigation />
                </div>

                <div className='col-span-10 col-start-2 h-fit'>
                    <Home />
                    <About />
                    <Projects />
                    <Education />
                    <ContactMe />
                </div>
            </div>
        </div>
    )
}

export default PortfolioMain
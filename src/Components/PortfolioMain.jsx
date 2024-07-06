import React from 'react'
import Navigation from './Navigation'
import About from './About' 
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import ContactMe from './ContactMe'

const PortfolioMain = () => {
    return (
        <div>
            <div className='position fixed'>
                <Navigation />
            </div>

            <div className="h-fit">
                <About />
                <Skills />
                <Projects />
                <Education />
                <ContactMe />
            </div>
        </div>
    )
}

export default PortfolioMain
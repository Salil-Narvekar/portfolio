import React from 'react'
import PersonalDetailsSection from './PersonalDetailsSection'
import Projects from './Projects'
import ContactMe from './ContactMe'

const PortfolioMain = () => {
    return (
        <div className="h-fit">

            <PersonalDetailsSection />
            <Projects />
            <ContactMe />

        </div>
    )
}

export default PortfolioMain
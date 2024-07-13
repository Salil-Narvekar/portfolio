import React from 'react'
import PageTitle from './PageTitle'
import AboutBullets from './AboutBullets'
import Resume from './Resume'
import ProfilePicture from './ProfilePicture'

const About = () => {
    return (
        <div className='h-fit grid grid-rows-12 items-start pt-20' id="About">

            <div className='row-span-1 md:row-span-2 lg:row-span-2 h-full w-full'>
                <PageTitle title='About Me' pageDiscriptionRequired='yes' pageDiscriptionLine1='Introducing a Detailed Overview of My Profile' />
            </div>

            <div className='row-span-11 md:row-span-10 lg:row-span-10 grid md:grid-cols-3 lg:grid-cols-3 items-center h-full'>

                {/* Profile Picture */}
                <div className='col-span-1 grid justify-items-center items-center'>
                    <ProfilePicture />
                </div>

                {/* Description Bullets */}
                <div className='col-span-2 grid grid-rows-11 gap-2 md:gap-1 lg:gap-0 h-full'>

                    {/* Designation */}
                    <div className='row-span-2 grid grid-rows-3 justify-items-center items-center'>
                        <div className='h-full w-full row-span-2 grid justify-items-center items-end text-md md:text-lg lg:text-3xl font-bold font-serif'>
                            Web Developer & Freelancer
                        </div>
                        <div className='h-full w-full grid justify-items-center items-start text-xs md:text-sm lg:text-md font-medium '>
                            React.js . Python . Django . Fullstack
                        </div>
                    </div>

                    {/* <div className='grid grid-rows-2 gap-2'> */}
                        <AboutBullets title='FullName' description='Salil Sunil Narvekar' />
                        <AboutBullets title='DOB' description='11 June, 2002' />
                        <AboutBullets title='Address' description='Mumbai (South) - 400007' />
                        <AboutBullets title='Email' description='narvekarsalil1106@gmail.com' />
                        <AboutBullets title='Contact' description='+91 9869757298' />
                        <AboutBullets title='Education' description='BSc. IT Graduate (Year - 2023)' />
                        <AboutBullets title='Experience' description='Internship (6 Months) & Freelance Projects' />
                        <AboutBullets title='My Resume' description={<Resume />} />
                    {/* </div> */}
                </div>
            </div>

        </div>
    )
}

export default About
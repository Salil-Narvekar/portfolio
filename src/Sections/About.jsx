import React from 'react'
import ResumeButton from '../Components/ResumeButton'
import PersonalDetails from '../Components/AboutComponents/PersonalDetails'
import Description from '../Components/AboutComponents/Description'
import DisplayPicture from '../Components/AboutComponents/DisplayPicture'

const About = () => {
  return (
    <div id='About' className='grid grid-rows-8 justify-center bg-gradient-to-b from-indigo-200 to-gray-600 h-full md:h-dvh lg:h-dvh pt-20 overflow-hidden'>

      <div className='row-span-1 grid justify-items-center content-start' data-aos-offset="100" data-aos-mirror="true" data-aos='zoom-out'>
        <h1 className='sectionTitle'> Data Analyst & Freelance Web Developer </h1>
        <p className='subtitle' data-aos-mirror="true" data-aos='zoom-out'>Python . React.js . Data Visualization</p>
      </div>

      <div className='row-span-6 grid sm:grid-cols-3 justify-items-center border-b-2 border-neutral-400 ml-16 mr-16 rounded'>
        <Description />
        <DisplayPicture />
        <PersonalDetails />
      </div>

      <div className='grid justify-center content-center'>
        <ResumeButton />
      </div>

    </div>
  )
}

export default About
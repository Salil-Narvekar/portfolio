import React from 'react'
import ResumeButton from '../Components/ResumeButton'
import PersonalDetails from '../Components/AboutComponents/PersonalDetails'
import Description from '../Components/AboutComponents/Description'
import DisplayPicture from '../Components/AboutComponents/DisplayPicture'

const About = () => {
  return (
    <div id='About' className='grid grid-rows-8 justify-center bg-gradient-to-b from-indigo-200 to-gray-600 h-full md:h-dvh lg:h-dvh pt-20 overflow-hidden'>

      <div className='row-span-1 grid justify-items-center content-start' data-aos-offset="100" data-aos-mirror="true" data-aos='zoom-out'>
        <span className='text-slate-800 text-md md:text-lg lg:text-3xl font-bold font-serif'> Web Developer & Freelancer </span>
        <div className='text-slate-700 text-xs md:text-sm lg:text-md font-medium' data-aos-delay="100" data-aos-mirror="true" data-aos='zoom-out'> React.js . Python . Django . Fullstack </div>
      </div>

      <div className='row-span-6 grid sm:grid-cols-3 justify-items-center border-b-2 border-neutral-400 ml-16 mr-16 rounded'>
        <Description />
        <DisplayPicture />
        <PersonalDetails />
      </div>

      {/* Note: animation issue here 'button not animating on viewport' */}
      <div className='grid justify-center content-center' data-aos-mirror="true">
        <ResumeButton />
      </div>

    </div>
  )
}

export default About
import React, { useEffect } from 'react'
import ResumeButton from '../Components/ResumeButton'
import SkillsPlate from '../Components/SkillsPlate'
import TypewriterComponent from 'typewriter-effect'

const Home = () => {
  return (
    <div id='Home' className=' grid grid-rows-3 content-center h-dvh pt-10 md:pt-20 lg:pt-20 bg-gradient-to-b from-indigo-300 to-indigo-200' >

      <div className='grid justify-items-center md:justify-items-start lg:justify-items-start content-center pl-4 md:pl-20 lg:pl-20'>
        <div className='text-xs md:text-lg lg:text-2xl xl:text-3xl font-normal text-slate-500 font-serif animate-fadeFromTop'> Welcome to my portfolio!</div>
        <div className='text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold font-serif text-violet-950 animate-fadeFromLeft'> Salil Narvekar </div>
        
        <div className='text-xs md:text-2xl lg:text-3xl font-medium font-sans text-slate-600 animate-fadeFromBottom'>
          
          <TypewriterComponent
            options={{
              strings: [
                'React developer with Python background.', 
                'Full stack web developer.', 
                'Frontend web developer.', 
                'Freelancer.'],
              autoStart: true,
              loop: true,
              cursor: "",
              delay: 30,
              shuffle: true,
              pauseFor: 1000,
              fadeOut: true,
              deleteSpeed: 20,
              wrapperClassName: 'typewriter-text',
            }}
          />

          <div className='grid justify-items-center md:justify-items-start lg:justify-items-start mt-2'>
            <ResumeButton />
          </div>
        </div>
      </div>

      <div className='grid justify-items-center content-start md:content-end lg:content-end pl-12 md:pl-20 lg:pl-0 text-left md:text-center lg:text-center'>
        <div className='text-xs md:text-sm lg:text-lg xl:text-xl text-slate-700 font-extrabold font-serif'> "Dedicated to grow & evolve with curiosity & creativity in the world of web development." </div>
        <div className='text-xs md:text-sm lg:text-md xl:text-lg text-slate-600 font-medium' data-aos-offset="200" data-aos='fade-up'> I am a <b className='text-violet-950'>full stack developer</b> with a strong foundation in <b className='text-violet-950'>React.js & Python, </b> along with an experience in all the technical skills mentioned. </div>
      </div>

      <SkillsPlate />

    </div>
  )
}

export default Home
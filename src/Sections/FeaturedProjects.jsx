import React, { useState } from 'react'
import ProjectPlate from '../Components/ProjectComponents/ProjectPlate'
import Slider from '../Components/ProjectComponents/Slider'
import projects from '../Data/projects.js'

const FeaturedProjects = () => {

  const [currentPage, setCurrentpage] = useState(0)

  return (
    <div id='Projects' className='bg-gradient-to-b from-indigo-200 to-slate-300 h-dvh pt-20 overflow-hidden'>

      <div className='grid justify-self-center content-start text-slate-800 text-md md:text-2xl lg:text-3xl text-center font-bold font-serif pb-2' data-aos-offset="80" data-aos-mirror="true" data-aos='zoom-out-up'> Featured projects </div>

      <div className='grid justify-items-center h-4/5 py-4' data-aos-offset="80" data-aos-mirror="true" data-aos='slide-left'>
        {
          projects.map((projectDetails, index) => (

            currentPage === index &&

            <ProjectPlate
              key={index}
              projectName={projectDetails.name}
              projectSubtitle={projectDetails.subtitle}
              projectImageUrl={projectDetails.projectImageUrl}
              description={projectDetails.description}
              languagesUsed={projectDetails.languages}
              Git_pages_link={projectDetails.gitPagesLink}
              Git_code_link={projectDetails.gitCodeLink}
            />
          ))
        }
      </div>

      <div className='grid justify-center content-start items-center w-full h-1/4' data-aos-offset="10" data-aos-mirror="true" data-aos='zoom-out-up' >
        <Slider pageCount={projects.length} setCurrentpageProp={setCurrentpage} />
      </div>
    </div>
  )
}

export default FeaturedProjects
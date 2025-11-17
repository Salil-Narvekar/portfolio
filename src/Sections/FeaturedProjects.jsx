import { useState } from 'react'
import ProjectPlate from '../Components/ProjectComponents/ProjectPlate'
import Slider from '../Components/ProjectComponents/Slider'
import { projectsWeb, projectsAnalysis } from '../Data/projects.js'

const FeaturedProjects = () => {

  const [currentPageWeb, setCurrentPageWeb] = useState(0)
  const [currentPageAnalysis, setCurrentPageAnalysis] = useState(0)

  return (
    <div id='Projects' className='bg-gradient-to-b from-indigo-200 to-slate-300 pt-20 overflow-hidden'>

      {/* Data Analysis Projects */}
      <div className='sectionTitle' data-aos-offset="80" data-aos-mirror="true" data-aos='zoom-out-up'> Data Analysis Projects </div>

      <div className='grid justify-items-center py-4' data-aos-offset="80" data-aos-mirror="true" data-aos='slide-left'>
        {
          projectsAnalysis.map((projectDetails, index) => (

            currentPageAnalysis === index &&

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
        <Slider pageCount={projectsAnalysis.length} setCurrentpageProp={setCurrentPageAnalysis} />
      </div>


      <hr className='mt-20 mb-20 ml-20 mr-20 h-1 rounded-lg bg-gradient-to-b from-purple-950 to-purple-600' />


      {/* Web development Projects */}
      <div className='sectionTitle' data-aos-offset="80" data-aos-mirror="true" data-aos='zoom-out-up'> Web development Projects </div>

      <div className='grid justify-items-center py-4' data-aos-offset="80" data-aos-mirror="true" data-aos='slide-left'>
        {
          projectsWeb.map((projectDetails, index) => (

            currentPageWeb === index &&

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
        <Slider pageCount={projectsWeb.length} setCurrentpageProp={setCurrentPageWeb} />
      </div>
    </div>
  )
}

export default FeaturedProjects
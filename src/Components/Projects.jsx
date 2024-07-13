import React from 'react'
import PageTitle from './PageTitle'
import ProjectPlate from './ProjectPlate'

const Projects = () => {
  return (
    <div className='h-fit grid items-start pt-20' id="Projects">
      <div className='h-fit w-full'>
        <PageTitle
          title='Featured Projects'
          pageDiscriptionRequired='yes'
          pageDiscriptionLine1='Showcasing a Selection of Web Applications Developed by Me, Demonstrating My Proficiency in Relevant Skills'
        />
      </div>

      <div className='grid sm:grid-cols-2 sm:grid-rows-2 gap-4 justify-items-center items-center h-fit py-4 pl-4 pr-4'>
        <ProjectPlate />
        <ProjectPlate />
        <ProjectPlate />
        <ProjectPlate />
        <ProjectPlate />
        <ProjectPlate />
      </div>

    </div>
  )
}

export default Projects
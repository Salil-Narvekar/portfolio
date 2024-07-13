import React from 'react'
import PageTitle from './PageTitle'

const Projects = () => {
  return (
    <div className='h-fit grid grid-rows-12 items-start pt-20' id="Projects">
      <div className='row-span-2 h-fit w-full'>
        <PageTitle
          title='Featured Projects'
          pageDiscriptionRequired='yes'
          pageDiscriptionLine1='Showcasing a Selection of Web Applications Developed by Me, Demonstrating My Proficiency in Relevant Skills'
        />
      </div>

      <div className='row-span-10 grid md:grid-cols-3 lg:grid-cols-3 h-full border border-black'>

      </div>
    </div>
  )
}

export default Projects
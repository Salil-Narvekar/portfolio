import React from 'react'
import PageTitle from './PageTitle'
import ProjectPlate from './ProjectPlate'
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsFiletypeJson } from "react-icons/bs";

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
        <ProjectPlate
          projectName='Organization Workflow (Version 0.0.2)'
          projectSubtitle='Personal Project'
          languagesUsed={[<FaReact />, <RiTailwindCssFill />, <BsFiletypeJson />]}
          Git_pages_link={'https://salil-narvekar.github.io/owrtc/'}
          Git_code_link={'https://github.com/Salil-Narvekar/owrtc.git'}
        />

        <ProjectPlate
          projectName='Organization Workflow with Real Time Communication'
          projectSubtitle='College Final Year Project'
          languagesUsed={[<TbBrandJavascript />, <FaHtml5 />, <FaCss3Alt />, <SiPhp />, <GrMysql />, <BsFiletypeJson />]}
          Git_pages_link={'https://salil-narvekar.github.io/owrtc/'}
          Git_code_link={'https://github.com/Salil-Narvekar/owrtc.git'}
        />

        <ProjectPlate
          projectName='Party Planner'
          projectSubtitle='Personal Project'
          languagesUsed={[<FaReact />, <RiTailwindCssFill />]}
          Git_pages_link={'https://salil-narvekar.github.io/demoPartyPlanner/'}
          Git_code_link={'https://github.com/Salil-Narvekar/demoPartyPlanner.git'}
        />

        <ProjectPlate
          projectName='Basic Authentication Interface'
          projectSubtitle='Personal Project'
          languagesUsed={[<FaReact />, <RiTailwindCssFill />]}
          Git_pages_link={'https://salil-narvekar.github.io/taskPopX/'}
          Git_code_link={'https://github.com/Salil-Narvekar/taskPopX.git'}
        />
      </div>

    </div>
  )
}

export default Projects
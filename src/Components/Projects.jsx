import React from 'react'
import PageTitle from './PageTitle'
import ProjectPlate from './ProjectPlate'
// import { FaPython } from "react-icons/fa";
// import { DiDjango } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsFiletypeJson } from "react-icons/bs";

const Projects = () => {

  // Logos for Languages Used 
  // const Python = <img src="https://img.icons8.com/fluency/30/python.png" alt={<FaPython />}/>
  // const Django = <img src="https://img.icons8.com/color/30/django.png" alt={<DiDjango />}/>
  const ReactJs = <img src="https://img.icons8.com/plasticine/30/react.png" alt={<FaReact />} />
  const Tailwind = <img src="https://img.icons8.com/fluency/30/tailwind_css.png" alt={<RiTailwindCssFill />} />
  const JavaScript = <img src="https://img.icons8.com/color/30/javascript--v1.png" alt={<TbBrandJavascript />} />
  const Html = <img src="https://img.icons8.com/color/30/html-5--v1.png" alt={<FaHtml5 />} />
  const CSS = <img src="https://img.icons8.com/color/30/css3.png" alt={<FaCss3Alt />} />
  const JSON = <img src="https://img.icons8.com/color/30/json--v1.png" alt={<BsFiletypeJson />} />
  const PHP = <img src="https://img.icons8.com/officel/30/php-logo.png" alt={<SiPhp />} />
  const MySql = <img src="https://img.icons8.com/color/30/mysql-logo.png" alt={<GrMysql />} />

  return (
    <div className='h-dvh grid items-start pt-20' id="Projects">
      <div className='h-1/5 w-full'>
        <PageTitle
          title='Featured Projects'
          pageDiscriptionRequired='yes'
          pageDiscriptionLine1='Showcasing a Selection of Web Applications Developed by Me, Demonstrating My Proficiency in Relevant Skills'
        />
      </div>

      <div className='h-4/5 border border-black grid grid-cols-12 gap-4 justify-items-center items-center w-full'>

        {/* <div className='col-span-2 w-full h-full'>

        </div>

        <div className='col-span-8 w-full h-full'>
          <ProjectPlate
            projectName='Organization Workflow (Version 0.0.2)'
            projectSubtitle='Personal Project'
            languagesUsed={[ReactJs, Tailwind, JavaScript, JSON]}
            Git_pages_link={'https://salil-narvekar.github.io/owrtc/'}
            Git_code_link={'https://github.com/Salil-Narvekar/owrtc.git'}
          />
        </div>

        <div className='col-span-2'>

        </div> */}

        {/* <ProjectPlate
          projectName='Organization Workflow with Real Time Communication'
          projectSubtitle='College Final Year Project'
          languagesUsed={[JavaScript, Html, CSS, PHP, MySql, JSON]}
          Git_pages_link={'https://salil-narvekar.github.io/owrtc/'}
          Git_code_link={'https://github.com/Salil-Narvekar/owrtc.git'}
        />

        <ProjectPlate
          projectName='Party Planner'
          projectSubtitle='Personal Project'
          languagesUsed={[ReactJs, JavaScript, Tailwind]}
          Git_pages_link={'https://salil-narvekar.github.io/demoPartyPlanner/'}
          Git_code_link={'https://github.com/Salil-Narvekar/demoPartyPlanner.git'}
        />

        <ProjectPlate
          projectName='Basic Authentication Interface'
          projectSubtitle='Personal Project'
          languagesUsed={[ReactJs, JavaScript, Tailwind]}
          Git_pages_link={'https://salil-narvekar.github.io/taskPopX/'}
          Git_code_link={'https://github.com/Salil-Narvekar/taskPopX.git'}
        /> */}
      </div>

    </div>
  )
}

export default Projects
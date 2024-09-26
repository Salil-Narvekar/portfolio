import React, { useState } from 'react'
import PageTitle from './PageTitle'
import ProjectPlate from './ProjectPlate'
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsFiletypeJson } from "react-icons/bs";
import Slider from './Slider';
import projectOwrtc2Img from '../projectOwrtc2.png'
import projectOwrtc1Img from '../projectOwrtc1.png'
import projectPartyImg from '../projectPartyImg.png'
import projectAuth from '../projectAuth.png'
import projectUserList from '../projectUserList.png'

const Projects = () => {

  // Logos for Languages Used 
  const Python = <img src="https://img.icons8.com/fluency/30/python.png" alt={<FaPython />}/>
  const Django = <img src="https://img.icons8.com/color/30/django.png" alt={<DiDjango />}/>
  const ReactJs = <img src="https://img.icons8.com/plasticine/30/react.png" alt={<FaReact />} />
  const Tailwind = <img src="https://img.icons8.com/fluency/30/tailwind_css.png" alt={<RiTailwindCssFill />} />
  const JavaScript = <img src="https://img.icons8.com/color/30/javascript--v1.png" alt={<TbBrandJavascript />} />
  const Html = <img src="https://img.icons8.com/color/30/html-5--v1.png" alt={<FaHtml5 />} />
  const CSS = <img src="https://img.icons8.com/color/30/css3.png" alt={<FaCss3Alt />} />
  const JSON = <img src="https://img.icons8.com/color/30/json--v1.png" alt={<BsFiletypeJson />} />
  const PHP = <img src="https://img.icons8.com/officel/30/php-logo.png" alt={<SiPhp />} />
  const MySql = <img src="https://img.icons8.com/color/30/mysql-logo.png" alt={<GrMysql />} />

  const projects = [
    {
      name: "Organization workflow (version 0.0.2)",
      subtitle: "Featured project",
      projectImageUrl: projectOwrtc2Img,
      description: "A web application built using React.js & Tailwind CSS for frontend & Django Rest Framework for backend API. Project focuses on utilizing React hocks, props, state management, etc. along with a Python-based backend to create REST APIs using Django Rest Framework. It's Revamped version of my college final year project.",
      languages: [ReactJs, Tailwind, JavaScript, Python, Django, JSON],
      gitPagesLink: 'https://salil-narvekar.github.io/owrtcFrontend/',
      gitCodeLink: 'https://github.com/Salil-Narvekar/owrtcRevamped.git'
    },
    {
      name: "Party planner",
      subtitle: "Personal project",
      projectImageUrl: projectPartyImg,
      description: 'Party Planner is a project to plan a party digitally including all the party aspects considering all details about the party. It focuses on the data manipulation & handeling on frontend itself',
      languages: [ReactJs, JavaScript, Tailwind],
      gitPagesLink: 'https://salil-narvekar.github.io/demoPartyPlanner/',
      gitCodeLink: 'https://github.com/Salil-Narvekar/demoPartyPlanner.git'
    },
    {
      name: "Basic authentication interface",
      subtitle: "Personal project",
      projectImageUrl: projectAuth,
      description: 'It is a basic Authentication system to demonstrate user Sign up depending upon the registration dynamically. It is handled through frontend itself focusing on useReducer and useContext. It is a responsive webapp developed to support dynamic viewports',
      languages: [ReactJs, JavaScript, Tailwind],
      gitPagesLink: 'https://salil-narvekar.github.io/taskPopX/',
      gitCodeLink: 'https://github.com/Salil-Narvekar/taskPopX.git'
    },
    {
      name: "Users listing",
      subtitle: "Personal project",
      projectImageUrl: projectUserList,
      description: 'Users listing accordion developed manually, along with search filter & CRUD operations handled through frontend',
      languages: [ReactJs, JavaScript, Tailwind],
      gitPagesLink: 'https://salil-narvekar.github.io/usersAccordion/',
      gitCodeLink: 'https://github.com/Salil-Narvekar/usersAccordion.git'
    }
    // {
    //   name: "Organization workflow with real time communication",
    //   subtitle: "College final year project",
    //   projectImageUrl: projectOwrtc1Img,
    //   description: 'A web application developed for Employee Management System. UI in HTML, CSS, Functionality in JavaScript & CRUD in PHP MySQL & Client-Side data population in JSON. Role Specific Data Access, Data Visualization and Login & Location Mapping Feature.',
    //   languages: [JavaScript, Html, CSS, PHP, MySql, JSON],
    //   gitPagesLink: 'https://salil-narvekar.github.io/owrtcFrontend/',
    //   gitCodeLink: 'https://github.com/Salil-Narvekar/owrtcFrontend.git'
    // }
  ]

  const [currentPage, setCurrentpage] = useState(0)
  // console.log("currentPage from main", currentPage)

  return (
    <div className='h-dvh grid grid-rows-14 pt-20' id="Projects">
      <div className='row-span-2 grid items-start h-full w-full'>
        <PageTitle
          title='Featured Projects'
          pageDiscriptionRequired='yes'
          pageDiscriptionLine1='Showcasing a Selection of Web Applications Developed by Me, Demonstrating My Proficiency in Relevant Skills'
        />
      </div>

      <div className='row-span-11 grid justify-self-center items-center py-4 w-11/12 lg:w-10/12 h-full'>
        <div className='w-full h-full'>
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
      </div>

      <div className='row-span-1 grid justify-items-center justify-self-center items-center w-full'>
        <Slider pageCount={projects.length} setCurrentpageProp={setCurrentpage} />
      </div>

    </div>
  )
}

export default Projects
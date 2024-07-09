import React, { useState } from 'react'
import { SkillIcon } from './SkillIcon'
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsFiletypeJson } from "react-icons/bs";
import { IoLogoVue } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiVuetify } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";

const Skills = () => {

  // You can add your new skill here to get auto iterated - currently from object

  // const skillsArr = [<FaPython />, <FaReact />, <IoLogoVue />, <TbBrandJavascript />, <FaHtml5 />, <FaCss3Alt />, <RiTailwindCssFill />, <FaBootstrap />, <SiVuetify />, <SiPhp />, <SiPhpmyadmin />, <SiMysql />, <BsFiletypeJson />, <FaGitSquare />]

  const skillsObj = {
    'Python': <FaPython />,
    'React.js': <FaReact />,
    'Vue.js': <IoLogoVue />,
    'JavaScript': <TbBrandJavascript />,
    'Html 5': <FaHtml5 />,
    "CSS 3": <FaCss3Alt />,
    "Tailwind CSS": <RiTailwindCssFill />,
    'BootStrap': <FaBootstrap />,
    'Vuetify': <SiVuetify />,
    'PHP': <SiPhp />,
    'SQL': <GrMysql />,
    'JSON': <BsFiletypeJson />,
    'GitHub': <FaGitSquare />
  }

  const [skillKey, setSkillKey] = useState('')

  const skills = Object.entries(skillsObj).map(([key, value]) => (
    <SkillIcon key={key} icon={value} name={key} setSkillKey={setSkillKey} />
  ));


  return (
    <div className='grid grid-rows-2 justify-items-center h-full w-full'>
      {/* <div className='grid grid-flow-col grid-rows-2 md:grid-flow-col lg:grid-flow-col gap-4 justify-items-center'>{skills}</div> */}
      <div className='grid md:grid-flow-col lg:grid-flow-col gap-4 justify-items-center'>{skills}</div>
      <div className='grid justify-items-center text-md md:text-xl lg:text-2xl xl:text-3xl font-bold w-full'>{skillKey}</div>
    </div>
  )
}

export default Skills
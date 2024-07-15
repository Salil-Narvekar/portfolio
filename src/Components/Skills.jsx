import React, { useState } from 'react'
import { SkillIcon } from './SkillIcon'
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
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

  // link for original icons - https://icons8.com/icons/set/gmail
  // You can add your new skill here to get auto iterated - currently from object
  // const skillsArr = [<FaPython />, <FaReact />, <IoLogoVue />, <TbBrandJavascript />, <FaHtml5 />, <FaCss3Alt />, <RiTailwindCssFill />, <FaBootstrap />, <SiVuetify />, <SiPhp />, <SiPhpmyadmin />, <SiMysql />, <BsFiletypeJson />, <FaGitSquare />]

  
  const skillsObj = {
    'Python': <img src="https://img.icons8.com/fluency/100/python.png" alt={<FaPython />}/>,
    'React.js': <img src="https://img.icons8.com/plasticine/100/react.png" alt={<FaReact />}/>,
    'Django': <img src="https://img.icons8.com/color/100/django.png" alt={<DiDjango />}/>,
    'Vue.js': <img src="https://img.icons8.com/color/100/vue-js.png" alt={<IoLogoVue />}/>,
    'JavaScript': <img src="https://img.icons8.com/color/100/javascript--v1.png" alt={<TbBrandJavascript />}/>,
    'Html 5': <img src="https://img.icons8.com/color/100/html-5--v1.png" alt={<FaHtml5 />}/>,
    "CSS 3": <img src="https://img.icons8.com/color/100/css3.png" alt={<FaCss3Alt />}/>,
    "Tailwind CSS": <img src="https://img.icons8.com/fluency/100/tailwind_css.png" alt={<RiTailwindCssFill />}/>,
    'BootStrap': <img src="https://img.icons8.com/fluency/100/bootstrap.png" alt={<FaBootstrap />}/>,
    'Vuetify': <img src="https://img.icons8.com/windows/100/vuetify.png" alt={<SiVuetify />}/>,
    'PHP': <img src="https://img.icons8.com/officel/100/php-logo.png" alt={<SiPhp />}/>,
    'SQL': <img src="https://img.icons8.com/color/100/mysql-logo.png" alt={<GrMysql />}/>,
    'JSON': <img src="https://img.icons8.com/color/100/json--v1.png" alt={<BsFiletypeJson />}/>,
    'GitHub': <img src="https://img.icons8.com/fluency/100/github.png" alt={<FaGitSquare />}/>
  }

  const [skillKey, setSkillKey] = useState('')

  const skills = Object.entries(skillsObj).map(([key, value]) => (
    <SkillIcon key={key} icon={value} name={key} setSkillKey={setSkillKey} />
  ));


  return (
    <div className='grid grid-rows-2 justify-items-center items-center h-full w-full'>

      <div className='grid sm:grid-flow-col grid-flow-col grid-rows-2 md:grid-rows-1 md:grid-flow-col lg:grid-rows-1 lg:grid-flow-col gap-4 justify-items-center items-center'>
        {skills}
      </div>

      <div className='grid justify-items-center text-md md:text-xl lg:text-2xl xl:text-3xl font-bold w-full text-slate-600'>
        {
          skillKey ?
            skillKey
            :
            <span className='text-slate-600 text-xs md:text-sm lg:text-sm font-medium'> - Hover to display skill name - </span>
        }
      </div>
      
    </div>
  )
}

export default Skills
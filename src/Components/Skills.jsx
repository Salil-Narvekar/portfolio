import React from 'react'
import { SkillIcon } from './SkillIcon'
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { IoLogoVue } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiVuetify } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";

const Skills = () => {

  //You can add your new skill here to get auto iterated
  const skillArr = [<FaPython />, <FaReact />, <IoLogoVue />, <TbBrandJavascript />, <FaHtml5 />, <FaCss3Alt />, <RiTailwindCssFill />, <FaBootstrap />, <SiVuetify />, <SiPhp />, <SiPhpmyadmin />, <SiMysql />, <BsFiletypeJson />, <FaGitSquare />]

  return (
    <div>
      <div className='grid grid-flow-col grid-rows-2 gap-4 md:gap-6 lg:gap-6'>
        {
          skillArr.length > 0 ?
            skillArr.map((skill, index) => (
              <SkillIcon key={index} icon={skill} />
            ))
            :
            <SkillIcon icon='N/A' />
        }
      </div>
    </div >
  )
}

export default Skills
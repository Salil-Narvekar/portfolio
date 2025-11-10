import React, { useState } from 'react'
import { SiNextdotjs } from "react-icons/si";
import { SkillIcon } from './SkillIcon';
import skillIconUrls from '../Urls/skillIconUrls.jsx';

const SkillsPlate = () => {

    const skillArray = [
        { name: 'Python', icon: skillIconUrls.python },
        { name: 'React Js', icon: skillIconUrls.react },
        { name: 'Microsoft Power BI', icon: skillIconUrls.powerBi },
        { name: 'Advance Microsoft Excel', icon: skillIconUrls.excel },
        { name: 'Tableau', icon: skillIconUrls.tableau },
        { name: 'SQL', icon: skillIconUrls.sql },
        { name: 'Artificial Intelligence', icon: skillIconUrls.ai },
        { name: 'Next Js', icon: <SiNextdotjs /> },
        { name: 'Vue Js', icon: skillIconUrls.vue },
        { name: 'JavaScript', icon: skillIconUrls.javaScript },
        { name: 'Node Js', icon: skillIconUrls.node },
        { name: 'Express Js', icon: skillIconUrls.express },
        { name: 'Mongo DB', icon: skillIconUrls.mongoDB },
        { name: 'Django Rest Framework', icon: skillIconUrls.django },
        { name: 'REST API', icon: skillIconUrls.restApi },
        { name: 'HTML 5', icon: skillIconUrls.html },
        { name: 'CSS 3', icon: skillIconUrls.css },
        { name: 'SCSS', icon: skillIconUrls.sass },
        { name: 'Tailwind CSS', icon: skillIconUrls.tailwindCss },
        { name: 'Material UI', icon: skillIconUrls.materialUi },
        { name: 'Bootstrap', icon: skillIconUrls.bootstrap },
        { name: 'PHP', icon: skillIconUrls.php },
        { name: 'JSON', icon: skillIconUrls.json },
        { name: 'Version control - Git', icon: skillIconUrls.git },
    ]

    const [skillName, setSkillName] = useState('')

    return (
        <div className='skillsPlate'>

            <div className='skillIcons animate-fadeFromBottom'>
                {
                    skillArray.map((skill, index) => (
                        <SkillIcon key={index} icon={skill.icon} name={skill.name} setSkillName={setSkillName} />
                    ))
                }
            </div>

            <div className='grid' data-aos-offset="40" data-aos-mirror="true" data-aos='zoom-out-up'>
                {
                    skillName ?
                        <span className='animate-fadeFromTop'>{skillName}</span>
                        :
                        <span> - Hover to display skill name - </span>
                }
            </div>
        </div>
    )
}

export default SkillsPlate
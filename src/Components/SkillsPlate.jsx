import React, { useState } from 'react'
import { SiNextdotjs } from "react-icons/si";
import { SkillIcon } from './SkillIcon';
import skillIconUrls from '../Urls/skillIconUrls.jsx';

const SkillsPlate = () => {

    const skillArray = [
        { name: 'Python', icon: skillIconUrls.python},
        { name: 'React.js', icon: skillIconUrls.react },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Vue.js', icon: skillIconUrls.vue },
        { name: 'JavaScript', icon: skillIconUrls.javaScript },
        { name: 'Django Rest Framework', icon: skillIconUrls.django },
        { name: 'REST API', icon: skillIconUrls.restApi },
        { name: 'Html 5', icon: skillIconUrls.html },
        { name: 'CSS 3', icon: skillIconUrls.css },
        { name: 'Tailwind CSS', icon: skillIconUrls.tailwindCss },
        { name: 'Material UI', icon: skillIconUrls.materialUi },
        { name: 'Bootstrap', icon: skillIconUrls.bootstrap },
        { name: 'PHP', icon: skillIconUrls.php },
        { name: 'SQL', icon: skillIconUrls.sql },
        { name: 'JSON', icon: skillIconUrls.json },
        { name: 'Version control - Git', icon: skillIconUrls.git },
    ]

    const [skillName, setSkillName] = useState('')

    return (
        <div className='grid grid-rows-2 justify-center content-center w-full pl-4 md:pl-0 lg:pl-0'>

            <div className='grid sm:grid-flow-col grid-flow-col grid-rows-2 md:grid-rows-1 md:grid-flow-col lg:grid-rows-1 lg:grid-flow-col gap-2 md:gap-4 lg:gap-4 items-center animate-fadeFromBottom'>
                {
                    skillArray.map((skill, index) => (
                        <SkillIcon key={index} icon={skill.icon} name={skill.name} setSkillName={setSkillName} />
                    ))
                }
            </div>

            <div className='grid justify-center content-center md:content-start lg:content-start w-full text-slate-600' data-aos-offset="100" data-aos-mirror="true" data-aos='zoom-out-up'>
                {
                    skillName ?
                        <span className='text-md md:text-xl lg:text-2xl xl:text-2xl font-semibold animate-fadeFromTop'>{skillName}</span>
                        :
                        <span className='text-xs md:text-sm lg:text-sm font-medium'> - Hover to display skill name - </span>
                }
            </div>
        </div>
    )
}

export default SkillsPlate
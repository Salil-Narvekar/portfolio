import React, { useState, useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { SkillIcon } from '../SkillIcon';

const ProjectPlate = ({ projectName, projectSubtitle, projectImageUrl, description, languagesUsed, Git_pages_link, Git_code_link }) => {

    const [isHovered, setIsHovered] = useState();
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDescription(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className='bg-sky-50
            grid sm:grid-rows-12 w-9/12 md:w-10/12 lg:w-10/12
            rounded-lg border border-purple-300 
            hover:shadow-xl hover:shadow-purple-500/50 duration-700'
            data-aos='slide-left'
        >

            {/* Project Title section */}
            <div className='row-span-2 grid justify-items-center items-center rounded-lg text-balance'>
                <div className='text-center'>
                    <div className='text-sm sm:text-md md:text-lg lg:text-xl font-bold text-purple-950' data-aos-offset="10" data-aos-mirror="true" data-aos='fade-up' data-aos-delay="300">{projectName}</div>
                    <div className='text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-slate-600' data-aos-offset="10" data-aos-mirror="true" data-aos='fade-up' data-aos-delay="400">{projectSubtitle}</div>
                </div>
            </div>

            {/* Project Window section */}
            <div className="row-span-8 grid justify-items-center justify-self-center w-11/12 md:w-10/12 lg:min-w-9/12 xl:min-w-8/12 h-80 border border-neutral-300 bg-slate-300 rounded-lg cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => Git_pages_link && window.open(Git_pages_link)}
            >
                <div
                    className='w-full h-full rounded-lg'
                    data-aos-offset="80" data-aos-mirror="true" data-aos='zoom-in-left'
                    style={{
                        backgroundImage: `url(${projectImageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    {

                        isHovered ?

                            <div className='grid justify-items-center items-center font-semibold bg-gradient-to-t from-violet-500 to-violet-100 opacity-90 h-full w-full rounded-lg'>
                                <div className='grid gap-1 justify-items-center text-xs md:text-sm lg:text-lg xl:text-xl' data-aos='flip-up' data-aos-duration="500">
                                    <div className='text-slate-700'>Redirect to Live Project URL</div>
                                    <div className='text-center text-blue-800'>{Git_pages_link ? Git_pages_link : 'Project not hosted !!'}</div>
                                    <TbExternalLink className='text-2xl md:text-3xl lg:text-4xl text-slate-700'/>
                                </div>
                            </div>

                            : showDescription &&

                            <div className='grid justify-items-center items-center font-semibold text-xs md:text-sm lg:text-md xl:text-lg text-slate-800 text-center bg-gradient-to-t from-violet-500 to-violet-100 opacity-90 h-full w-full rounded-lg pl-2 pr-2 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6 text-balance' data-aos-mirror="true" data-aos='flip-up'>
                                <span data-aos='flip-down' data-aos-duration="500">{description}</span>
                            </div>

                    }
                </div>
            </div>

            {/* Languages used section */}
            <div className='row-span-1 flex justify-center items-center gap-2'>
                {
                    languagesUsed.map((language, index) => (
                        <span key={index} className='text-lg md:text-2xl lg:text-2xl xl:text-2xl h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-3xl drop-shadow-2xl' data-aos-mirror="true" data-aos-delay="500" data-aos-duration="2000" data-aos='flip-left'>
                            {language}
                        </span>
                    ))
                }
            </div>

            {/* Git Source code link section */}
            <div className='row-span-1 grid grid-flow-col gap-2 justify-items-center items-center 
                h-full w-full font-medium rounded-b-lg cursor-pointer 
                bg-gradient-to-t from-violet-950 to-violet-900 hover:bg-gradient-to-b text-slate-200'
                onClick={() => window.open(Git_code_link)}
            >
                <div className='grid justify-items-end text-sm md:text-md lg:text-lg w-full' data-aos-mirror="true" data-aos-delay="500" data-aos-duration="2000" data-aos='fade'><FaGithub className='' /></div>
                <span className='text-xs md:text-sm lg:text-md w-full' data-aos-mirror="true" data-aos-delay="500" data-aos-duration="2000" data-aos='fade'>Click to View Project's Git Source.</span>
            </div>

        </div>
    )
}

export default ProjectPlate
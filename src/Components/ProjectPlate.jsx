import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

const ProjectPlate = ({ projectName, projectSubtitle, projectImageUrl, description, languagesUsed, Git_pages_link, Git_code_link }) => {

    const [isHovered, setIsHovered] = useState();

    return (
        <div
            className='bg-sky-50
            grid sm:grid-rows-12 h-full w-full
            rounded-lg border border-purple-300 
            mt-3 md:mt-0 lg:mt-0
            hover:shadow-xl hover:shadow-purple-500/50 duration-700'
        >

            {/* Project Title section */}
            <div className='row-span-2 grid justify-items-center items-center rounded-lg'>
                <div className='text-center'>
                    <div className='text-sm sm:text-md md:text-lg lg:text-xl font-bold text-purple-950'>{projectName}</div>
                    <div className='text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-slate-600'>{projectSubtitle}</div>
                </div>
            </div>

            {/* Project Window section */}
            <div className="row-span-8 grid justify-items-center justify-self-center w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 h-full border border-neutral-300 bg-slate-300 rounded-lg cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.open(Git_pages_link)}
            >
                <div className='w-full h-full rounded-lg' style={{
                    backgroundImage: `url(${projectImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    {

                        isHovered ?

                            <div className='grid justify-items-center items-center font-semibold bg-gradient-to-t from-violet-500 to-violet-100 opacity-90 h-full w-full rounded-lg'>
                                <div className='grid gap-1 justify-items-center text-xs md:text-sm lg:text-lg xl:text-xl '>
                                    <div className='text-slate-700'>Redirect to Live Project URL</div>
                                    <div className='text-center text-blue-800'>{Git_pages_link}</div>
                                    <TbExternalLink className='text-2xl md:text-3xl lg:text-4xl text-slate-700' />
                                </div>
                            </div>

                            :

                            <div className='grid size-full bg-neutral-200 opacity-20 rounded-lg'>
                                {description}
                            </div>

                    }
                </div>

            </div>

            {/* Languages used section */}
            <div className='row-span-1 grid grid-flow-col gap-3 justify-items-center justify-self-center items-center'>
                {
                    Array(languagesUsed).map((language) => (
                        language
                    ))
                }
            </div>

            {/* Git Source code link section */}
            <div className='row-span-1 grid grid-flow-col gap-2 justify-items-center items-center 
                h-full w-full font-medium rounded-b-lg cursor-pointer 
                bg-gradient-to-t from-violet-950 to-violet-900 hover:bg-gradient-to-b text-slate-200'
                onClick={() => window.open(Git_code_link)}
            >
                <div className='grid justify-items-end text-sm md:text-md lg:text-lg w-full'><FaGithub className='' /></div>
                <span className='text-xs md:text-sm lg:text-md w-full'>Click to View Project's Git Source Code.</span>
            </div>

        </div>
    )
}

export default ProjectPlate
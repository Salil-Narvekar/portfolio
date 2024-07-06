import React from 'react'
import NavContent from './NavContent'
import { Link } from 'react-scroll';
import { FaUser } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { TbSchool } from "react-icons/tb";
import { RiMailSendFill } from "react-icons/ri";

const Navigation = () => {
    return (
        <div className='grid grid-rows-12 h-dvh py-6 pl-3 pr-3'>
            <div className='row-span-2'>
                <span className='grid justify-items-start items-center text-xl font-semibold rounded-3xl bg-gradient-to-l from-transparent to-blue-500 w-54 lg:w-60 h-8 lg:h-12 pl-4'>
                    Portfolio WebApp
                </span>
            </div>

            <div className='row-span-10 grid grid-rows-12'>
                <Link to="about" smooth={true} duration={1000}> <NavContent navFor='About' navIcon={<FaUser />} /> </Link>
                <Link to="skills" smooth={true} duration={1000}> <NavContent navFor='Skills' navIcon={<GiSkills />} /> </Link>
                <Link to="projects" smooth={true} duration={1000}> <NavContent navFor='Projects' navIcon={<FaLink />} /> </Link>
                <Link to="education" smooth={true} duration={1000}> <NavContent navFor='Education' navIcon={<TbSchool />} /> </Link>
                <Link to="contact" smooth={true} duration={1000}> <NavContent navFor='Contact' navIcon={<RiMailSendFill />} /> </Link>
            </div>
        </div>
    )
}

export default Navigation
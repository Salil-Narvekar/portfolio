import React from 'react'
import NavContent from './NavContent'
import { RiHome2Fill } from "react-icons/ri";
import { Link } from 'react-scroll';
import { FaUser } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
// import { GiSkills } from "react-icons/gi";
import { TbSchool } from "react-icons/tb";
import { RiMailSendFill } from "react-icons/ri";

const Navigation = () => {
    return (
        <div className='grid grid-rows-12'>
            <div className='row-span-2'></div>
            <Link to="home" smooth={true} duration={1000}> <NavContent navFor='Home' navIcon={<RiHome2Fill />} /> </Link>
            <Link to="about" smooth={true} duration={1000}> <NavContent navFor='About' navIcon={<FaUser />} /> </Link>
            <Link to="projects" smooth={true} duration={1000}> <NavContent navFor='Projects' navIcon={<BsImages />} /> </Link>
            <Link to="education" smooth={true} duration={1000}> <NavContent navFor='Education' navIcon={<TbSchool />} /> </Link>
            <Link to="contact" smooth={true} duration={1000}> <NavContent navFor='Contact' navIcon={<RiMailSendFill />} /> </Link>
        </div>
    )
}

export default Navigation
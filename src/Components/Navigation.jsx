import React from 'react'
import NavContent from './NavContent'
import { RiHome2Fill } from "react-icons/ri";
import { Link } from 'react-scroll';
import { FaUser } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { PiCertificateFill } from "react-icons/pi";
import { RiMailSendFill } from "react-icons/ri";

const Navigation = () => {

    const navTabs = {
        'Home': <RiHome2Fill />,
        'About': <FaUser />,
        'Projects': <BsImages />,
        'Certificates': <PiCertificateFill />,
        'Contact': <RiMailSendFill />
    }

    return (
        <div className='grid grid-rows-12'>
            <div className='row-span-2'></div>
            {
                Object.entries(navTabs).map(([key_NavFor, value_Icon], index) => (

                    <Link
                        key={index}
                        to={key_NavFor}
                        smooth={true}
                        duration={1000}
                    >
                        <NavContent
                            key={index}
                            navFor={key_NavFor}
                            navIcon={value_Icon}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Navigation
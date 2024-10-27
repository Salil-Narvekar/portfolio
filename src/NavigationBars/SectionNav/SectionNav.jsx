import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BadgeIcon from '@mui/icons-material/Badge';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import { Link } from 'react-scroll';

const SectionNav = () => {

  const navItems = [
    { path: 'Home', icon: <HomeRoundedIcon /> },
    { path: 'About', icon: <BadgeIcon /> },
    { path: 'Projects', icon: <AutoAwesomeMotionIcon /> },
    { path: 'Certifications', icon: <WorkspacePremiumIcon /> },
    { path: 'Contact', icon: <ConnectWithoutContactRoundedIcon /> },
  ]

  return (
    <div className='grid grid-flow-row gap-4 justify-center content-center position fixed z-10 w-12 h-dvh'>
      {
        navItems.map((navItems, index) => (
          <Link
            key={index}
            to={navItems.path}
            smooth={true}
            duration={1000}
          >
            <div key={index} className='cursor-pointer hover:translate-x-1 hover:scale-125 duration-700'>
              {navItems.icon}
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default SectionNav